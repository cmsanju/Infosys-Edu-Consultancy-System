import React from 'react'
import './MyPrograms.css'
import program_1 from '/src/assets/program_4.jpg'
import program_2 from '/src/assets/program_5.png'
import program_3 from '/src/assets/program_6.jpg'
import program_icon_1 from '/src/assets/program-icon-1.png'
import program_icon_2 from '/src/assets/program-icon-2.png'
import program_icon_3 from '/src/assets/program-icon-3.png'
import { Link } from 'react-router-dom'

const programs = () => {
  return (
    <div className='programs'>
      <Link to='/javafullstack' className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Java Full Stack</p>
        </div>
        </Link>
      <Link to='/learning' className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Learning & Development</p>
        </div>
        </Link>
      <Link to='/digitalmarketing' className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Bulk SMS and Digital Marketing</p>
        </div>
        </Link>
    </div>
  )
}

export default programs
