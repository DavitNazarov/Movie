import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom'

const TopMoviesTrailer = () => {
  const {topMovieId} = useParams()
  const [videos, setVideos] = useState([])
  console.log(videos);
    const trailer_url = `https://api.themoviedb.org/3/movie/${topMovieId}/videos`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmI3ZTBiMWUzYmQ3NzdiNjQyZGEzODM0NWYyZGFmNCIsInN1YiI6IjY2MDA1NTEyYjg0Y2RkMDE3ZGY1Njc1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6lXrbw6YNd8aO2z2Lw7tZGYe34rYDjjvaSKc_yFIKg'
        }
      };
      useEffect(() => {
        axios.get(trailer_url,options)
        .then((response) => {
          setVideos(response.data);
        }).catch((error) => {
            console.log(error);
        })
      }, [])
      
  return (
    <div className="display_f_center">
      <YouTube className="YouTube" videoId={ videos.results ? videos.results[1].key :null}/>
    </div>
  )
}

export default TopMoviesTrailer