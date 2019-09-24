import React from 'react';
import styles from '../styles/projects.module.css';

const Projects = () =>{

    function socialMedia(url){
        window.open(url)
        return false;
      }

  return(           
            <div className = {styles.ProjectNew}>
                <div className={styles.imgProjectWrapper}>
                    <img src={require("../images/projects.png")}/>
                </div>

                <div className={styles.linkToProjects}>
                    <div className={styles.butonGithub}>
                        <a className="icon-btn2" onClick={()=>socialMedia("https://github.com/janwa039")}>
                             Go To Github
                        </a>
                    </div>

                </div>

            </div>

        )
}

export default Projects;