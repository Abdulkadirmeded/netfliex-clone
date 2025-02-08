import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVjNDQwOGU5ZDA5YzBmZDgwN2VjMzU2Zjc4ZjA1NiIsInN1YiI6IjY2MmZmYmZmMjRmMmNlMDEyMzJiMzFhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jKfTBu1EfA_rrN0Q4LHjuYdvgybFSBXl7GxtiTNrrXQ'
    }
  };

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.result[0]))
    .catch(err => console.error(err)); 
  },[])
  
   
  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-1)}} />
        <iframe width='90%' height='90%' 
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' allowFullScreen frameBorder="0"></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
    </div>
  )
}
export default Player