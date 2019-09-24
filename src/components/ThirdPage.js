import React, {useState} from 'react';
import styles from '../styles/thirdPage.module.css'
import { Spring} from 'react-spring/renderprops';
import { useInView } from 'react-intersection-observer'
import { Redirect, Route , Link } from 'react-router-dom'

function ThirdPage() {


    const [redirect, setRedirect] = useState(false)


    const [refthird, inView] = useInView({
        threshold: .75,
        triggerOnce:true
      })

      const handleOnclick = ()=>{

          return (
              <div>
                  {console.log('here')}
                    <Redirect to='/projects'/>
              </div>
            )
      }

    return (
        <div ref={refthird} className = {styles.wrapperThird}>
            <Spring
                from={{ opacity: inView? 0 : 1}}
                to={{ opacity: inView? 1 : 0 }}>
                {props => (
                    <div style={props} className={styles.wrap}>
                    <div style={props} className={styles.experience}><h1>Through the years</h1></div>
                    <div style={props} id={styles.small}><h1>Make your own destiny, Make the best of your life</h1></div>
                    <div  style={props} className={styles.experiencetable}>
                        <div className={styles.life}>
                            <div className={styles.lifeP}>
                                Graduated  from great Lakes college of toronto, Canada in 2013.
                                <p>Experience:&nbsp;&#128526;</p>
                            </div>
                        </div>
                        <div className={styles.life}>
                            <div className={styles.lifeP}>
                                Attented university of ottawa, Canada in 2013 and graduated with computer Engineering degree in 2018.
                                <p>Experience:&nbsp;&#128517;</p>         
                            </div>
                        </div>
                        <div className={styles.life}>
                            <div className={styles.lifeP}>
                                Started working at Ribbon communications 2018.
                                <p>Experience:&nbsp;&#128513;</p>   
                            </div>
                        </div>
                        <div className={styles.life}>
                            <div className={styles.lifeP}>
                                Took a front end developer nano degree program at udacity 2019 for 4months.
                                <p>Experience:&nbsp;&#128522;</p>   
                            </div>
                        </div>
                        <div className={styles.life}>
                            <div className={styles.lifeP}>
                                Right now looking for ways to better improve everyday.
                                <p>&#128521;&#128513;</p>   
                            </div>
                        </div>
                    </div>
                    <div  style={props} className={styles.linktoproject}>
                    <Link className={styles.viewingLink} to="/projects"><div style={props} className={styles.viewing}>View Projects</div></Link>
                    </div>

                </div>
            )
            }
            </Spring>

        </div>
    )
} 
export default ThirdPage;