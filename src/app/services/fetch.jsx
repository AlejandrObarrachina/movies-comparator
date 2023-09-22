export const getMovies = async (genre, popular) => {
  let uri = "";
  if (popular) {
    uri = new URL("http://localhost:8080/movies");
  }
  if (genre != null) {
    uri = new URL(`http://localhost:8080/movies/${genre}`);
  }
  return fetch(uri).then((res) => res.json());
};

export const findMovieById = async (id) => {
  return fetch(`http://localhost:8080/get-movie-by-id/${id}`).then((res) =>
    res.json()
  );
};

export const saveUserData = async (userData) => {
  try {
    fetch(`http://localhost:8080/users`, {
      body: JSON.stringify(userData),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
  return;
};
