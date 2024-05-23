import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

export default function Task() {
  return (
    <div className='Container d-flex flex-column flex-nowrap align-items-center justify-content-center '>
        <h1 className='my-4'>Our Latest Cases</h1>
        <div className='Section col-9 w-90 h-100 d-flex flex-row flex-wrap justify-content-center align-items-center row-gap-3 ms-sm-1'>

            <div className='Card col-xl-5 col-md-6 col-sm-9 bg-yellow p-3 m-1 bg-warning d-flex flex-column justify-content-start align-items-start rounded'>
            <img src={require('../imges/4534.jpg')} className='w-100 h-75 pb-4'/> 
            <h4> SAMPLE HEADLINE</h4>
            <p> Sample text , Click to select the Text Element</p>
            <a href='#' className='text-success'>Learn More</a>
            </div>

            <div className='Card  col-xl-5 col-md-6 col-sm-9  p-3 m-1 bg-warning d-flex flex-column justify-content-start align-items-start rounded'>
            <img src={require('../imges/6546.jpg')} className='w-100 h-75 pb-4'/> 
            <h4> SAMPLE HEADLINE</h4>
            <p> Sample text , Click to select the Text Element</p>
            <a href='#'className='text-success'>Learn More</a>
            </div>

            <div className='Card  col-xl-5 col-md-6 col-sm-9  p-3 m-1 bg-warning d-flex flex-column justify-content-start align-items-start rounded'>
            <img src={require('../imges/6546.jpg')} className='w-100 h-75 pb-4'/> 
            <h4> SAMPLE HEADLINE</h4>
            <p> Sample text , Click to select the Text Element</p>
            <a href='#' className='text-success'>Learn More</a>
            </div>

            <div className='Card  col-xl-5 col-md-6 col-sm-9  p-3 m-1 bg-warning d-flex flex-column justify-content-start align-items-start rounded'>
            <img src={require('../imges/001.jpg')} className='w-100 h-75 pb-4'/> 
            <h4> SAMPLE HEADLINE</h4>
            <p> Sample text , Click to select the Text Element</p>
            <a href='#'className='text-success'>Learn More</a>
            </div>

        </div>
        
        <div className='bg-secondary w-100 py-3 mt-4 '>
            <h5 className='bg-yellow text-white'> This web site was created by <span className='text-warning'> EraaSoft</span></h5>
        </div>

    </div>
  )
}
