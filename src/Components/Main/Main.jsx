import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets.js'
function Main() {
  return (
    <>
     <div className='main'>
       
       <div className='nav'>
         <p style={{fontSize:30}}>DevAi</p>
         <img src={assets.user_icon} />
       </div>
       <div className="main-container">
        <div className="greet">
            <p><span style={{fontSize:70}}>Hello,Dev.</span></p>
            <p style={{fontSize:70}}>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                 <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
                <p>Briefly summaries this concept:urban planning</p>
                 <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Brainstorm team bonding activities for our work retreat</p>
                 <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Improving the readability of the following code</p>
                 <img src={assets.code_icon} alt="" />
            </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Main
