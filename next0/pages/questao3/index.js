export default function Movies({ data }) {
  return (
    <div>
      {data.Search.map((m) => (
        <div>
          <a key={m.imdID} href={"questao3/" + m.imdbID}>
            {m.Title} --- {m.Year}
          </a>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://www.omdbapi.com/?apikey=25a45914&s=barbie`);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
