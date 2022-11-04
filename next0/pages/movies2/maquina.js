import useSWR from "swr";
import { useRouter } from "next/router";

export default function Movies2() {
  const router = useRouter();
  const { imdbID } = router.query;
  const { data, error } = useSWR(
    `https://extreme-ip-lookup.com/json/?key=bUGSZs7LZXoyY5hTMie7`,
    fetcher
  );
  if (error) return <div>falha na requisição...</div>;
  if (!data) return <div>carregando...</div>;
  return (
    <div>
      <div>
        <table border='10px'>
          <thead>
            <tr>
              {Object.keys(data).map((k) => (
                <th>{k}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(data).map((k) => (
                <td>{data[k]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

async function fetcher(url) {
  const res = await fetch(url);
  const json = await res.json();
  return json;
}
