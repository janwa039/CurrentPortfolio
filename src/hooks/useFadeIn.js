import React from 'react'
import styles from '../styles/landingPage.module.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom';

function Landing () {

  return (
    <div  className= {styles.container}>
       <Spring from={{opacity:0, marginTop:-500}}
        to={{opacity:1, marginTop:68}}>
          {
            props=>(
              <div  className={styles.contain}>
              <div style={props} className={styles.nameWrapper}>
                <div  className={styles.about}>
                    <div >
                      <h1 className={styles.developer}>SOFTWARE DEVELOPER</h1><br/>
                    </div>
                    <div >
                      <h1 className={styles.designer}>SOFTWARE DESIGNER</h1>
                    </div>
                    <div className={styles.buttonformat} >
                      <Link className={styles.oldsite} to='/oldsite'><h1 className={styles.designerFormat}><div className={styles.buttonLearn}>OLD WEBSITE</div></h1></Link>
                    </div>

                </div>
              </div>
              <div style={props} id ={styles.mypicture} className={styles.iphoneWrapper}>
                  <img src={require("../images/my-picture.png")} alt="display"/>
              </div>

          </div>

         )
         }
      </Spring>
     </div>   
  )
}

export default Landing
