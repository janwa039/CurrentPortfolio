import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/landingPage.module.css'
import Landing from '../hooks/useFadeIn.js'



function LandingPage() {

    let [isClickNav, openNav]= useState(false)

    const openingNav = () =>{
        openNav(isClickNav=true)
    }

    const closingNav = () =>{
        openNav(isClickNav=false)
    }


    return (
          <div className = {styles.wrapper}>
              <div className ={isClickNav? styles.closeNav : styles.sidenav }>
                  <div className={styles.avatarWrapper}>
                        <div className={styles.avatar }><img src={require("../images/avatar.png")}
                        className={isClickNav? styles.avatarAnimeimg : styles.avatarimg} alt="welcome" /></div>
                  </div>
                  <div className={styles.linksSocial}>
                    <p><Link to="/" className={styles.closebtn} onClick={closingNav}>&times;</Link></p>
                    <p><Link to="/projects">Projects</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                  </div>
            </div>
              <header className={styles.navigate2}>
                  <div id={styles.logo2}><p>A</p></div>
                  <a  className="closebtn" onClick={openingNav} >
                    <div id = {styles.menuBar2}>
                        <div className={styles.bar2} id={styles.firstMenuBar}></div>
                        <div className={styles.bar2} id={styles.secondMenuBar}></div>
                        <div className={styles.bar2} id={styles.thirdMenuBar}></div>
                    </div>         
                  </a>
              </header>
              <Landing/>
        </div>

    )
} 
export default LandingPage;