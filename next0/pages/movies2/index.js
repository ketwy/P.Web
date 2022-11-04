import useSWR from "swr";

export default function Movies2() {
  const { data, error } = useSWR(
    `http://www.omdbapi.com/?apikey=25a45914&s=barbie`,
    fetcher
  );
  if (error) return <div>falha na requisição...</div>;
  if (!data) return <div>carregando...</div>;
  return (
    <div>
      {data.Search.map((m) => (
        <div>
          <a key={m.imdID} href={"movies2/" + m.imdbID}>
            {m.Title} --- {m.Year}
          </a>
        </div>
      ))}
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
