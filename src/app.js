import React from 'react';
import { useState } from 'react';
import Search from './components/Search';


const App = ()=>{


    const [search,setSearch] = useState(false)
    




    return <div  >
        <div style={{height:140,marginBottom:10}} className="hero is-primary is-bold">
         <div className="hero-body">
             <div className="container">
           <div>
               <h1 className="title">
                   Movie Fight 
                 <span style={{display:"inline-block", marginLeft:10}} className="icon">
                     <i className="fas fa-film"></i>
               </span>  
                   
                   </h1>
               
</div>
           
             </div>
         </div>
        </div>
    <div className="container">
        <div className="columns">
<div className="column">
 <Search setSearch={setSearch} side="left"/>

</div>
<div className="column">
 <Search setSearch={setSearch} side="right" />

</div>
</div>
    
  {!search  ?<div style={{textAlign:"center"}} className="columns is-centered">   
    <div className="hero notification column is-half is-half is-primary is-bold">
        <h1 className="title">
            Search for a Movie!
        </h1>
        <p>We will compare it for you!</p>
    </div>

   </div> :null }        
</div>


</div>



}



export default App