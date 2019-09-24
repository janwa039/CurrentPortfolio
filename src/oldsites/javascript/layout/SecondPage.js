import React from "react";
import Particles from 'react-particles-js';
import "../../css/secondPage.css";
import Media from "react-media";
import Carosel from './CaroselComponent'
import {SecondParticle} from '../../assets/mainParticle'

function socialMedia(url){
  window.open(url)
  return false;
}

function CardsArea(){
  return (
    <div className ='card-wrapper'>
      <div className="card" style={{width: "18rem"}}>
      <img src={require('../../images/memory-game-screenshot.png')} className="card-img-top" alt ='my-profile-image'/>
        <div className="card-body">
          <h5 className="card-title">Memory Game</h5>
          <p  className="card-text">
          Memory Game is a card matching game, where you get to test how well    
          you can remember or recall things last seen.
          </p>
        </div>
        <div className="card-body">
          <a onClick={()=>socialMedia("https://github.com/janwa039/MemoryGame")} class="card-link">Source code link</a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
      <img src={require('../../images/arcade-game-board.png')} className="card-img-top" alt ='my-profile-image'/>
        <div className="card-body">
          <h5 className="card-title">Arcade Game</h5>
          <p className="card-text">
          A Frogger Arcade Game built with Vanilla JavaScript without any external libraries. 
          The idea of this game is to try and reach the Water without trying to touch a Bug! or you loose lives.
          </p>
        </div>
        <div className="card-body">
          <a onClick={()=>socialMedia("https://github.com/janwa039/Classic-Arcade-Game")} class="card-link">Source code link</a>
        </div>
      </div>
      <div className="card" style={{width: "18rem"}}>
      <img src={require('../../images/RESTATUARANT-REVIEW.png')} className="card-img-top" alt ='my-profile-image'/>
        <div className="card-body">
          <h5 className="card-title">Restaurant Review App</h5>
          <p className="card-text">
          Static webpage is converted to a mobile-ready web application. 
          Also added a service worker to load the application for offline experience for the user
          </p>
        </div>
        <div className="card-body">
          <a onClick={()=>socialMedia("https://github.com/janwa039/restaurantReviewApp")} class="card-link">Source code link</a>
        </div>
      </div>
    </div>

  )
}


export default class SecondPage extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className = 'secondPageMain'>
        <div className='particle-second-page'>
          <Media query="(min-width: 465px)">
              {matches =>{
                if(matches)
                {
                  return <Particles params = {SecondParticle}/>
              }
              else{
                return ''
              }
            }}
          </Media>   
        </div>
        <div className='page-with-content'>
        <div className='projects'> Projects </div>
        <Media query="(max-width: 750px)">
              {matches =>{
                if(matches)
                {
                  return <Carosel/>
                }
              else{
                return <CardsArea/>
                }
            }}
          </Media>
        </div>
    </div>
    )
  }
}



