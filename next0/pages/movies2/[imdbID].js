import useSWR from "swr";
import { useRouter } from "next/router";

export default function Movies2() {
  const router = useRouter();
  const { imdbID } = router.query;
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=25a45914&i=`+ imdbID,
    fetcher
  );
  if (error) return <div>falha na requisição...</div>;
  if (!data) return <div>carregando...</div>;
  return (
    <div>
      <div>
        <h1>{data.Title}</h1>
        <h2>{data.Year}</h2>
        <img src={data.Poster} />
        <h3>Disponibilizado {data.Released}</h3>
        <h3>Tempo de duração {data.Runtime}</h3>
      </div>
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
