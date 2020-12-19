import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieElement from './movieelements';





const MovieDetail = (props)=>{
    
   
    const[data1,setData1] = useState('') 
    const[data2,setData2] = useState('') 


    


useEffect(()=>{

 const fetchMovieData = async()=>{
         
        const res =   await axios.get('https://www.omdbapi.com/',{

            params:{
              apiKey: process.env.REACT_APP_API_KEY,
              t: props.movieTitle
            }
         
         
           })

               if(props.side==='left'){
                 setData1(res.data);
               }
                else{
                  setData2(res.data)
                }



    }


    if(props.movieTitle){
      fetchMovieData()
    }




},[props.movieTitle,props.side])



        return <div>
  { data1  ?   <MovieElement state1={data1}/>    : null    }
       
  { data2  ?    <MovieElement state2={data2}/>    : null    }
       
        </div>








}





export default MovieDetail;