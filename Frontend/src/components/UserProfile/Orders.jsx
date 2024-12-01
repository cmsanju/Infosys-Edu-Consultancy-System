import React from 'react'
import program_1 from '/src/assets/program_4.jpg'
import program_2 from '/src/assets/program_5.png'
import program_3 from '/src/assets/program_6.jpg'
import program_icon_1 from '/src/assets/program-icon-1.png'
import program_icon_2 from '/src/assets/program-icon-2.png'
import program_icon_3 from '/src/assets/program-icon-3.png'

function Orders() {
  return (
    <div>
            

            <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Java Full Stack</p>
        </div>
      </div>
    </div>
  )
}

export default Orders
