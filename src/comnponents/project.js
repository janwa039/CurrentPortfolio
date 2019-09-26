import React from 'react';
import styles from '../style/project.module.css'
import {Link } from 'react-router-dom'


function Project() {


    function socialMedia(url){
            window.open(url)
            return false;
    }

  return (
    <div id={styles.main}>
        <section>
            <div className={styles.projectMainWrapper}>
              <div className={styles.homePage}>
                 <p><Link className={styles.link} to='/'>Go to HomePage</Link></p>
                </div>
                <div className={styles.mainCover}>
                    <div className={styles.github}>
                        <div><a onClick={()=>socialMedia("https://github.com/janwa039")}>View Github</a></div>
                    </div>
                    <div className={styles.fun}>
                        <div>FUN EXPERIENCES</div>
                    </div>
                    <div className={styles.scroll}>
                        <div>
                            Scroll below
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.projects}>
                <div className={styles.individualProjects} id={styles.p1}>
                <div className={styles.covers}>
                    <p>Memory Game</p>
                    <p>Language: Javascript</p>
                </div>
                </div>
                <div className={styles.individualProjects} id={styles.p2}>
                <div className={styles.covers}>
                    <p>Arcade Game</p>
                    <p>Language: Javascript</p>
                </div>
                </div>
                <div className={styles.individualProjects} id={styles.p3}>
                <div className={styles.covers}>
                    <p>Restautant Review App </p>
                    <p>Language: Javascript</p>
                </div>
                </div>
                <div className={styles.individualProjects} id={styles.p4}>
                <div className={styles.covers}>
                    <p>Others</p>
                    <p>view Github</p>
                </div>
                </div>

            </div>
        </section>
    </div>
  )
}

export default Project

