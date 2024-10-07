import React from 'react'
import {useRef} from 'react'
  const DarkBg=()=> {

  const Color=useRef(null);

  const ChangeBackgroundColor=()=>{
       const BgCol='gray';
       if(Color.current){
         Color.current.style.backgroundColor=BgCol;
       }
      
       
  };
  return (
    <>
    
   <section 
   ref={Color}>
   <button onClick={ChangeBackgroundColor}>Change</button>
      
   </section>

    </>
  );
};

export default DarkBg;
