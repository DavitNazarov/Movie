import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/singleMovie.scss";
import ReactPlayer from "react-player";
const PopularMovieSingle = () => {
  const { movieId } = useParams();
  // * fech api data. using axios
  const [singleMovieApi, setSingleMovieApi] = useState([]);

  const url = `https://imdb-top-100-movies.p.rapidapi.com/${movieId}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${import.meta.env.VITE_POPULAR_MOVIE_API_key}`,
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .get(url, options)
      .then((response) => {
        setSingleMovieApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // without loader ;)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="single_movie_conteiner"
      style={{ backgroundImage: `url(${singleMovieApi.big_image})` }}
    >
      <div className="single_movie_content">
        <div>
          <img
            src={singleMovieApi.image}
            alt={`The movie name ${singleMovieApi.title}`}
          />
        </div>
        <div className="single_movie_box">
          <div className="single_movie_text">
            <h1>{singleMovieApi.title}</h1>
            <p>{singleMovieApi.description} </p>
          </div>
          <div className="single_movie_desctiption">
            <ul>
              <li>
                <span className="single_movie_span1">Genre:</span>{" "}
                {singleMovieApi.genre}{" "}
              </li>
              <li>
                <span className="single_movie_span1">Director:</span>{" "}
                {singleMovieApi.director}{" "}
              </li>
              <li>
                <span className="single_movie_span1">Rating:</span>{" "}
                {singleMovieApi.rating}/10{" "}
              </li>
            </ul>

            <ul>
              <li>
                <span className="single_movie_span1">Writers:</span>{" "}
                {singleMovieApi.writers}{" "}
              </li>
              <li>
                <span className="single_movie_span1">Relase Date:</span>{" "}
                {singleMovieApi.year}{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="single_movie_video">
        <ReactPlayer
          controls={true}
          width="1000px"
          height="700px"
          url={singleMovieApi.trailer_embed_link}
        />
      </div>
    </div>
  );
};

export default PopularMovieSingle;
