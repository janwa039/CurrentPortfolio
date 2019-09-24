import React from "react";
import Particles from 'react-particles-js'
import "../../css/main.css";
import Media from "react-media";
import SecondPage from "./SecondPage"
import Aboutme from "./aboutPage"
import Form from './Form'
import {MainParticle} from '../../assets/mainParticle'


function SecondTextArea(){
  return (
    <div className="second-text-area  ">
    <div className="d-writing animated rotateIn">D</div>
    <div className="e-writing color-icon-btn bounceInUp">E</div>
    <div className="s-writing bounceInUp">S</div>
    <div className="i-writing color-icon-btn bounceInUp">I</div>
    <div className="g-writing bounceInUp">G</div>
    <div className="n-writing color-icon-btn bounceInUp">N</div>
  </div>
  )
}


class MainLayout extends React.Component{

  constructor(props){
    super(props)
    this.state={
      x:0,
      enable:true
     }

  }



  animatedShow(){
    const element =  document.querySelector('.second-text-area ')
    element.classList.add('animated', 'bounceInUp')

    const element2 =  document.querySelector('.main-text-area')
    element2.classList.add('animated', 'bounceInDown')

  }

  componentDidMount(){
    this.animatedShow()
    
  }



render(){
  

  return (
      <div className="mainBody">
        <section className="small-view">
          <div className="mainArea"> 
            <img
              src={require("../../images/art-black-background-black-clothes-1546035-min.jpg") }
              className="img-fluid colorGirl" alt="yes"
            />
            <div className ='particles'>
            <Media query="(min-width: 1025px)">
              {matches =>{
                if(matches)
                {
                  return <Particles params = {MainParticle}/>
              }
              else{
                return <Particles params = {MainParticle}/>
              }
            }}
          </Media>
          </div>
          </div>
          <div className="middle-main" >
            <div className="main-text-area" >
              <div className="j-writing color-icon-btn">J</div>
              <div className="e-writing">E</div>
              <div className="n-writing color-icon-btn">N</div>
              <div className="n2-writing">N</div>
              <div className="y-writing color-icon-btn">Y</div>
            </div>
            <SecondTextArea />
          </div>
        </section>
        <section>
          <Aboutme />
        </section>
        <section className='second-section'>
          <SecondPage />
        </section>
        <section>
          <Form />
        </section>
        <section className="footer">
          Copyright Affiong Baasey 2019
        </section>
      </div>
  );
}

}

export default MainLayout
