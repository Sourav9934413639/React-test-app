import React, {useState,useEffect } from 'react'
import Header from './Header'
import axios from 'axios';
import MovieList from './MovieList';
import Load from './Load';
import './styles/movies.css'
const Movie = () => {
     const [data,setData]=useState([]);
     const [load,setLoad]=useState(true);
    useEffect(()=>{

        const options = {
          method: 'GET',
          url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
          params: {q: 'game of thr'},
          headers: {
            'X-RapidAPI-Key': '28047f0ea3msheacb85697d55de4p1b0322jsn259a4dd709ae',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
          }
        };
        async function renderMovieCards(){
            try {
                const response = await axios.request(options);
                console.log(response.data.d);
                setData(response.data.d);
                setLoad(false);
            } catch (error) {
                console.error(error);
                
            }
        }
        renderMovieCards();
    },[])
  return (
    <>
      <Header/>
      <div className='list'>
        {
        (load)?<Load/>:(
            data.map((item)=>{
               return <MovieList title={item.l} key={item.id} />
         })
        )
    }
      </div>
    </>
  )
}

export default Movie
