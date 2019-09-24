import React from 'react';
import styles from '../styles/secondPage.module.css';
import { Spring} from 'react-spring/renderprops';
import { useInView } from 'react-intersection-observer'

const SecondPage = () =>{

    const [refstory, inView] = useInView({
        threshold: 0.75,
        triggerOnce:true
      })


  return(           
            <div ref={refstory} className = {styles.wrapperSecond}>
                  <div className={styles.wrapperSecondCover}> 
                            <div className={styles.quotes} >
                                <p>Stay true to yourself, Never Give up</p>
                                <p>By the way i am <span className = {styles.myname}>Jennifer Bassey &#128540; &#128075;</span></p>
                            </div>
                  <Spring
                        from={{ opacity: inView? 0 : 1}}
                        to={{ opacity: inView? 1 : 0 }}>
                        {props => (
                                <div style={props} className={styles.pageParagraph} >
                                  <div style={props} className={styles.myStory}>My Story?</div>
                                    <p style={props}>
                                        I am Nigerian. Before coming to canda 2012, i had no idea if i wanted to be a software developer. I have 
                                        always been surrounded by doctors, nurses and so on. All i know was back then i wanted to be a surgeon or pilot nothing more.
                                        Thankfully i had a friend who introduced me to something called photoshop to design with. since i didnt get the whole idea behind programming then.
                                        As time passed and as i got more curious i wanted to make those design more functional, From there on i started learning a language called javascript.
                                        Since then things got better and instresting and i look for ways to get beeter as a developer. I am not perfect but am always willing to put my best foot foward to learn and grow.
                                        Also want to be in a position where i can also help others grow years from now following this career path as a web developer. 
                                        I love building websites and Designing. Skills:Javascript, HTML, CSS, reactJS, Adobe photoshop/sketch Redux., redux saga. 

                                    </p>
                                 </div>
                        )
                        }
                        </Spring>
                    </div>
            </div>

        )
}

export default SecondPage;