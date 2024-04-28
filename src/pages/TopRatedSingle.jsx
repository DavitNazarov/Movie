import  axios  from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/TopRatedMovieSingle.scss'
import TopRatedMoviesTrailer from '../components/TopMovies/TopRatedMoviesTrailer';

const TopRatedSingle = () => {
  const {topMovieId} = useParams()
    const [singleMovieApi, setSingleMovieApi] = useState({})
    const [warningErr, setWarningErr] = useState()
    const url = `https://api.themoviedb.org/3/movie/${topMovieId}`
    const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_TOP_RATED_API_key}`
            }
        };
        
    useEffect(() => {
        axios.get(url, options)
        .then((response)=>{setSingleMovieApi(response.data)})
        .catch((error)=>{setWarningErr(error);})
        // without loader ;)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const image_url_backdrop_path = 'https://image.tmdb.org/t/p/original/'
    const image_url_poster_path= 'https://image.tmdb.org/t/p/w200/'
  return (
    <div>
      {warningErr ? (
        <h1 className='err_text'>Ooooops! Error happened!!! Movie can not be founded </h1> )
        :
        (
          <div>
            <div className='Top_rated_image_backdrop_path' style={{backgroundImage:`url(${image_url_backdrop_path}/${singleMovieApi.backdrop_path})`}}></div>
            <div className='Top_single_movie_conteiner'>
             
                <img src={`${image_url_poster_path}${singleMovieApi.poster_path}`} alt={singleMovieApi.title} />
             
              <div className='Top_single_movie_box'>
                <div>
                  <div>
                    <h1 className='Top_single_movie_title'>{singleMovieApi.title}</h1> 
                  </div>
                  <div>
                    <p>{singleMovieApi.overview} </p>
                  </div>
                </div>
                <div className='Top_single_movie_option'>     
                    <ul>
                      <li><span className='Top_single_movie_option_span'>Release Date:</span> {singleMovieApi.release_date} </li>
                      <li><span className='Top_single_movie_option_span'>Genre:</span> {singleMovieApi.genres ? singleMovieApi.genres.map(data=>(<span key={data.id}> {data.name}, </span>)):null } </li>
                      <li><span className='Top_single_movie_option_span'>Production Companies:</span> {singleMovieApi.production_companies ? singleMovieApi.production_companies.map(data=>(<span key={data.id}> {data.name}, </span>)):null }</li>
                    </ul>
                    <ul>
                      <li><span className='Top_single_movie_option_span'>Production Countries:</span> {singleMovieApi.production_countries ? singleMovieApi.production_countries.map(data=>(<span key={data.id}> {data.name}, </span>)):null }</li>
                      <li><span className='Top_single_movie_option_span'>Duration:</span> {singleMovieApi.runtime} min</li>
                      <li><span className='Top_single_movie_option_span'>Rating:</span> {singleMovieApi.vote_average? singleMovieApi.vote_average.toFixed() :null} / 10</li>
                    </ul>
              </div>
              </div>
            </div>
          
              <TopRatedMoviesTrailer/>
          </div>
        )
      }
    </div>
  )
}

export default TopRatedSingle