export default function Movies({ data }) {
  return (
    <div>
      <div>
        <div>
          <h1>{data.Title}</h1>
          <h2>{data.Year}</h2>
          <img src={data.Poster} />
          <h3>Disponibilizado {data.Released}</h3>
          <h3>Tempo de duração {data.Runtime}</h3>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { imdbID } = context.query;
  const res = await fetch(`http://www.omdbapi.com/?apikey=25a45914&i=` + imdbID);

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
