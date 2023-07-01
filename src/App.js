import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact'

import SkinsCard from './components/SkinsCard'
import { useState } from 'react';

function App() {
  const[version,setskin]=useState(
    [{name:'i-phone 10',Model:[
      {Phone:'i-phone 10 X64 Go',price:'234.69€',imglink:'https://static.fnac-static.com/multimedia/Images/FF/FF/BC/AA/11189503-1505-1540-1/tsp20190304145242/Apple-iPhone-X-64-Go-5-8-Gris-Sideral-Reconditionne.jpg'},
      {Phone:'i-phone 10 32 GB',price:'200€',imglink:'https://pricenow.co.ke/wp-content/uploads/2019/07/1-23655.jpg'}
    ],imgsrc:'https://static.fnac-static.com/multimedia/Images/FF/FF/BC/AA/11189503-1505-1540-1/tsp20190304145242/Apple-iPhone-X-64-Go-5-8-Gris-Sideral-Reconditionne.jpg'},

    
    
    {name:'i-phone 11',Model:[
      {Phone:'i-phone 11_64 Go',price:'480€',imglink:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-red.jpg'},
      {Phone:'i-phone 11_Pro Max 64 Go',price:'630€',imglink:'https://www.tunisianet.com.tn/170581-large/telephone-portable-apple-iphone-11-pro-max-64-go-gold.jpg'}
    ],imgsrc:'https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-11/iphone-11-red.jpg'},
    
    
    {name:'i-phone 12',Model:[
      {Phone:'i-phone 12_128 Go',price:'613€',imglink:'https://fr.shopping.rakuten.com/photo/1554571729_L.jpg'},
      {Phone:'i-phone 12_64 Go',price:'759€',imglink:'https://media.croma.com/image/upload/v1662425819/Croma%20Assets/Communication/Mobiles/Images/229936_shx8xa.png'}
    ],imgsrc:'https://fr.shopping.rakuten.com/photo/1554571729_L.jpg'},
    
    
  ]
  )    
  return (
    <div className=".nav">
      <>
      <div className='name'>
      <NavLink to={"Home"}>Home</NavLink>
      <NavLink to={"Product"}>Product</NavLink>
      <NavLink to={"Contact"}>Contact</NavLink>
 
   
     

      </div>


<Routes >
  <Route path='Home' element={<Home></Home>}></Route>
  <Route path='Product/' element={<Product version={version}></Product>}>
  
  </Route>
  <Route path='Contact' element={<Contact></Contact>}></Route>
  <Route path='/Product/:id' element={<SkinsCard Model={version}></SkinsCard>}></Route>
  
 
</Routes>
      
      </>
    </div>
  );
}

export default App;
