export default function Movies({ data }) {
  return (
    <div>
      {Array.isArray(data.Search) ? (
        data.Search.map((m) => (
          <div>
            <img src={m.Poster}></img>
            <br />
            {m.Title} --- {m.Year}
            <hr />
          </div>
        ))
      ) : (
        <div>
          <img src={data.Poster}></img>
          <br />
          {data.Title} --- {data.Year}
        </div>
      )}
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
