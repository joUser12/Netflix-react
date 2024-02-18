import React, { useEffect, useState } from 'react'
import axios from '../../axois';
import './Banner.css'

function Banner() {

  const [banner, setBanner] = useState();
  useEffect(() => {
    axios.get('banner').then((response) => {
      debugger
      setBanner(response.data.banner[0]);
    })
  }, [])

  return (
    <div className='banner' style={{ backgroundImage: `url(${banner ? banner.bannerImage : ''})` }}>

      <div className='content'>
        <h1 className='title'>{banner ? banner.bannerName : ''} </h1>
        <div className='banner_buttons'>
          <button className='button'>Play</button>
          <button className='button'>My list</button>
        </div>
        <h1 className='description'>
          {
            banner ? banner.description : ''
          }
        </h1>
      </div>


      {/* <Carousel autoPlay={true} interval={5000} infiniteLoop={true}>
        <div style={{ backgroundImage: `url('https://wallpaperaccess.com/full/2703652.png')` }}>
          <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
              <button className='button'>Play</button>
              <button className='button'>My list</button>
            </div>
            <h1 className='description'>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface
            </h1>
          </div>
        </div>
        <div style={{ backgroundImage: `url('https://wallpaperaccess.com/full/2703652.png')` }}>
          <div className='content'>
            <h1 className='title'>Another Movie</h1>
            <div className='banner_buttons'>
              <button className='button'>Play</button>
              <button className='button'>My list</button>
            </div>
            <h1 className='description'>
              Another description for the second movie.
            </h1>
          </div>
        </div>
      </Carousel> */}
      <div className="fade_bottom"></div>

    </div>

  )
}

export default Banner