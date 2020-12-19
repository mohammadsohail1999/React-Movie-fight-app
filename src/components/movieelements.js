import React, { createRef, useEffect } from 'react';




const MovieElement = (props)=>{

const side  = createRef();

  


  useEffect(()=>{




 const leftStats = document.querySelectorAll('#left-hand .notification');
 const rightStats = document.querySelectorAll('#right-hand .notification')
 


if(leftStats && rightStats.length!== 0){

leftStats.forEach((leftStat,index)=>{

 const rightStat = rightStats[index].getAttribute('data-value')
  const rightstat = rightStats[index]

 const leftstat = leftStats[index].getAttribute('data-value')




      
 if(parseInt(leftstat) < parseInt(rightStat)){
  
   leftStat.classList.remove('is-primary');
   leftStat.classList.add('is-warning');      
   
   rightstat.classList.remove('is-warning');
   rightstat.classList.add('is-primary');

        
  
   


 }else{
  
   leftStat.classList.remove('is-warning');      
   leftStat.classList.add('is-primary');

   rightstat.classList.remove('is-primary');
   rightstat.classList.add('is-warning');






 }

 
  


 

 


})


}




 











},[props.state1,props.state2])











    const renderMovieDetail = (Movie)=>{

     
   const boxOffice = parseInt(Movie.BoxOffice.replace(/[^a-zA-Z ]/, "").replaceAll(',',''));
  

  const ImdbRating = parseFloat(Movie.imdbRating);
   
  const Metascore =  parseInt(Movie.Metascore);

   
  const imdbVotes = parseInt(Movie.imdbVotes.replaceAll(',',''))

   
  const Awards = Movie.Awards.split(' ').reduce((prev,word)=>{

     const value = parseInt(word);

     if(isNaN(value)){
       return prev;
     }else{

      return prev + value 


     }



  },0)



      // console.log(imdbVotes,ImdbRating,Metascore,Awards);     




      

    if(Movie){

          return <div ref={side} id={props.state1 ? 'left-hand' :'right-hand'}>
            <article style={{margin:10}} className="media">
              <figure className="media-left">
                <p className="image"><img src={Movie.Poster} alt={Movie.Title}/></p>
              </figure>
               <div className="media-content">
                  <div>
                     <h1 style={{fontSize:50,fontWeight:"bold"}}>{Movie.Title}</h1>
                     
        <h4>{Movie.Genre}</h4>
        <p>{Movie.Plot}</p>
                     
                     </div>
                    
               </div>
            </article>
      
            <article data-value={isNaN(Awards) ? 0 : Awards } className="notification is-primary">
                      <p  className="title">
                        {Movie.Awards}
                      </p>
                      <p className="subtitle">
                        awards
                      </p>
            </article>
      
            <article data-value={isNaN(boxOffice) ? 0 : boxOffice} className="notification is-primary">
                      <p className="title">
                        {Movie.BoxOffice}
                      </p>
                      <p className="subtitle">
                      box Office
                      </p>
            </article>
      
            <article data-value={isNaN(Metascore) ? 0 : Metascore} className="notification is-primary">
                      <p className="title">
                        {Movie.Metascore}
                      </p>
                      <p className="subtitle">
                        MetaScore
                      </p>
            </article>
      
            <article data-value={isNaN(ImdbRating)?0: ImdbRating} className="notification is-primary">
                      <p className="title">
                        {Movie.imdbRating}
                      </p>
                      <p className="subtitle">
                        ImdbRating
                      </p>
            </article>
      
            <article data-value={isNaN(imdbVotes) ? 0 : imdbVotes} className="notification is-primary">
                      <p className="title">
                        {Movie.imdbVotes}
                      </p>
                      <p className="subtitle">
                        Imdb Votes
                      </p>
            </article>
          </div>
       
      
    }
      

      
      
      
      
        }
      
  


    return <div>
      
      {props.state1 ? renderMovieDetail(props.state1) : null}
      {props.state2 ? renderMovieDetail(props.state2) : null}



    </div>
             

     

      
      
      
    }
          











export default MovieElement;