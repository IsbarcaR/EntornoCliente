fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((artistas) => {
    const artista3 = artistas.filter((album) => album.userId === 3);

    artista3.forEach((album) => {
      console.log(album.title);
    });
  })
  .catch((error) => console.error("Error;", error));
