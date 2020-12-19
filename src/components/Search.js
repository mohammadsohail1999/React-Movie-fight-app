
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import MovieDetail from './movieDetail';
import './style.css';


const Search = (props)=>{
  
  const [query,setQuery] =  useState('');
   const [data, setData] = useState('');
   const[active, setActive] = useState('');
 

  
   

   useEffect(()=>{

    

const timeoutid  = setTimeout(() => {

  const fetchData = async (query)=>{

  
  const res =   await axios.get('http://www.omdbapi.com/',{

   params:{
     apiKey: process.env.REACT_APP_API_KEY,
     s: query
   }


  })

   setData(res.data.Search);

}

if(query){
fetchData(query);
}

}, 1500);
 


 return ()=>{

     clearTimeout(timeoutid);


     



   
  }





},[query])



const  renderAutoComplete = ()=>{

  if(data){
   
const list = data.map((el)=>{


  return <div className="icons"  onClick={()=>{
    
      setActive(el.Title)
   
    
    
      document.querySelector('input').value = document.activeElement.querySelector('span').innerText;
    
        
      setData('')

      setQuery('');
      

      props.setSearch(true); 

    


  }}  key={el.imdbID} style={{display:"flex",alignSelf:"center",height:80}} >

      <img style={{width:70,padding:5}} src={el.Poster} alt={el.Title}/>
      
<span style={{alignSelf:'center'}} className="movieTitle" value={el.title} >{el.Title}</span>


  </div>




})
      
return list;
  }

 
  

  





 } 

const dom = ()=>{

  if(data){
    document.addEventListener('click',()=>{

      
      setData('');


     })
    }
   
    else return null;

    }
    dom()




 


   
  return <div >
    <form className="control" onSubmit={(e)=>{e.preventDefault()}}>
      <label style={{fontWeight:"bold"}}>Search a Movie</label>
    <input value={query} className="input" placeholder="search..." onChange={(e)=>{setQuery(e.target.value)}}/>
  </form>

<div style={{position:"relative"}}>
   
      <div style={{position:"relative"}} className={`dropdown ${data ? 'is-active' : null}`}>
          
          <div style={{height:200,width:400,overflowY:"scroll"}} className="dropdown-menu">
               
               <div className="dropdown-content results">

                

             {renderAutoComplete()}




               </div>



          </div>

</div>
          

  {active ? <MovieDetail movieTitle={active} side={props.side}/> : null }




  </div>

   




   



   







</div>


     }
    



export default Search;