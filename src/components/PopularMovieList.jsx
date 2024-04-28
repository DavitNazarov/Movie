import {  useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import indexStyle from '../index.module.css'
import '../styles/PopularMovieList.scss'
import { routes } from '../constant/routes';
import { PuffLoader } from 'react-spinners'
export const PopularMovieList = () => {
  
  // * fech api data. using axios
  const [apiData, setApiData] = useState([])
  const [isloading, setIsloading] = useState(false)
  const [movieError, setMovieError] = useState()
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': `${import.meta.env.VITE_POPULAR_MOVIE_API}`,
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };

  useEffect(() =>{
    axios.get(url, options)
    .then((response)=>{setApiData(response.data)})
    .catch((error)=>{setMovieError(error);})
    .finally(()=>setIsloading(false) )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
 
  
  return (
    <>
    {movieError ? (<h1>Ooops! error Happened</h1> ) : null}
    {isloading && <PuffLoader color="#ff0000" />}
    <div className='popular_Movie_list_Title'>
      <h1>Top <span className='popular_Movie_list_Title_span1'> Movies </span> On <span className='popular_Movie_list_Title_span1'> DB!</span> </h1>
    </div>
    <div className={`${indexStyle.df_center} ${indexStyle.padding_top} ${indexStyle.body_color}`}>
    <div className='popular_Movie_list_Conteiner'>
    {apiData.map((apiData)=> {
      return(
        <div key={apiData.id} className='popular_Movie_list_Card'> 
            <Link to={`${routes.popular_on_db}/${apiData.id} `}> 
              <img className='popular_Movie_list_image' src={apiData.image} alt={apiData.title} />
              <div className='popular_Movie_list_Card_Body'>
              <svg width="99px" height="99px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fae500"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.43200000000000005"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M11.0748 7.50835C9.74622 6.72395 8.25 7.79065 8.25 9.21316V14.7868C8.25 16.2093 9.74622 17.276 11.0748 16.4916L15.795 13.7048C17.0683 12.953 17.0683 11.047 15.795 10.2952L11.0748 7.50835ZM9.75 9.21316C9.75 9.01468 9.84615 8.87585 9.95947 8.80498C10.0691 8.73641 10.1919 8.72898 10.3122 8.80003L15.0324 11.5869C15.165 11.6652 15.25 11.8148 15.25 12C15.25 12.1852 15.165 12.3348 15.0324 12.4131L10.3122 15.2C10.1919 15.271 10.0691 15.2636 9.95947 15.195C9.84615 15.1242 9.75 14.9853 9.75 14.7868V9.21316Z" fill="#fae500"></path> <path fillRule="evenodd" clipRule="evenodd" d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z" fill="#fae500"></path> </g></svg>                
              </div>
            </Link>
        </div>
      )
  })}    
        </div>
      </div>
    </>
        
  )
}
