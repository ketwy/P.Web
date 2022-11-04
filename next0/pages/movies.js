export default function Movies({ data }) {
  return (
    <div>
      <table>
        <tbody>
          {data.Search.map((m) => (
            <tr>
              <td>
                <img src={m.Poster} />
              </td>
              <td>
                {m.Title} --- {m.Year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
