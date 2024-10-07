
import { useRef, useState } from 'react'
import './Sidebar.css'
import {assets} from '../../../assets/assets'
import Dark from '../../DarkMode/Dark';
import Light from '../../LightMode/Light';
// import DarkBg from '../../DarkMode/DarkBg'


const Sidebar=()=> {
 // const BgColor=useRef(null);
   const [extended,setExtended]=useState(false);
  

  
  
  return (
    <>
  
      <div className='sidebar'>
         
      <div className='top'>
         <div className='w-11 h-10  gap-2 hover:bg-gray-300 rounded-full shadow' >
           <img onClick={()=>setExtended(!extended)} src={assets.menu_icon} style={{marginLeft:12,height:55,width:35,marginTop:20}} /></div>
          <div style={{
            marginTop:30,
            display:'flex',
            flexDirection:'row',

          }} className="new-chat">
            <img  width="100%"
            src={assets.plus_icon} alt="" />
           {extended ? <p>New Chat</p>:null}
          </div>
          {
          extended ?
          <div 
            style={{
                display:'flex',
                flexDirection:'column',
                marginTop:30

            }}
          className="recent">
            <p  style={{
                fontSize:18,
                fontWeight:'bold',
                marginLeft:25,
               
                

            }}
            className='recent-title'>Recent</p>
            <div 
             style={{
                display:'flex',
                flexDirection:'row',
                gap:8,
                marginTop:25,
                 borderRadius:40,
                 padding:'15px 18px'
             }}
            className="recent-entry">
                <img src={assets.message_icon} style={{width:30,height:30}} />
                <p>React is...</p>
            </div>
          </div> 
                  :null} 
      </div>

      <div
       style={{
        marginBottom:1,
        display:'flex',
        flexDirection:'column',
        gap:15
       }}
      className='bottom'>
           <div
            style={{
                display:'flex',
                flexDirection:'row',
                gap:20,
                width:180,
                height:50,
                alignItems:'center',
                 

              

            }}
           className="bottom-item_recent-entry">
            <img src={assets.question_icon} alt="" style={{width:30,height:30,marginLeft:20}}  />
           {extended ?  <p style={{
               fontSize:23,
               paddingTop:5,

            }}>Help</p>:null}
           </div>

           <div 
            style={{
              display:'flex',
              flexDirection:'row',
              gap:20,
              width:180,
              height:50,
              alignItems:'center',
               
            }}
           className="bottom-item_recent-entry">
            <img src={assets.history_icon}  style={{width:30,height:30,marginLeft:20}}  />
           {
           extended ?
           <p style={{
            fontSize:23
        }}>Activity</p>:null
           }
           </div>

           <div 
            style={{
              display:'flex',
              flexDirection:'row',
              gap:20,
              width:180,
              height:50,
              alignItems:'center',
              
            }}
           className="bottom-item_recent-entry">
            <img src={assets.setting_icon} style={{width:30,height:30,marginLeft:20}} />
            {extended ?  <p style={{
                fontSize:23
            }}>Setting</p>:null}
           </div>
      </div>
      </div>
      <section >

      
   
      
      </section>
    </>
  )
}

export default Sidebar;
