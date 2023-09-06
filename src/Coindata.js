import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Parser from "html-react-parser"
function Coindata()
{
   const { id }= useParams();
   const [coin,setCoin]= useState(null);

   useEffect(
     function()
     {
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then( function(response) {  setCoin(response.data) } )
     },[]
   )

   return(
     <div className="coin-page">
       
       <div className="coin-page-box">
           
           <img src={coin ? coin.image.large:null} alt="coin"/>
           <h2 className="coin-name">{coin ? coin.name:null}</h2>

           <p>
             {coin ? Parser(coin.description.en) : null}
           </p>
       </div>  

     </div>  
   )
}

export default Coindata;