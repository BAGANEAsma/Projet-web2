import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';



function SkinsCard({Model}) {
const id=useParams();


const item=Model[id.id]
console.log(item)

  return (
    
    <div className='homeimg'>
 {item.Model?.map(e=><div className='allskins'>

  <h1 className='version'>{e.Phone}</h1>
  <h1 className='skinimg'>{e.price}</h1>
<img src={e.imglink }></img>
  
 </div>)}
 

    </div>

  );
}

export default SkinsCard;