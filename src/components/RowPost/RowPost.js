import React, { useEffect, useState } from 'react'
import './RowPost.css';
import axios from '../../axois';
function RowPost(probs) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    debugger
    axios.get(probs.url).then(response => {
      setMovies(response.data.data);
    }).catch(err => {
      // alert('Network issue');
    })
  }, [])
  return (
    <div className='row'>
      <h2>{probs.title}</h2>
      <div className='posters'>
        {movies.map((obj, index) => (
          <img key={index} alt='poster' className='poster' src={obj.ImageUrl} />
        ))}
        

      </div>
    </div>
  )
}

export default RowPost