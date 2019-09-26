import React from 'react';
import styles from '../style/landingPage.module.css'
import { Link } from 'react-router-dom'


function LandingPage() {


    function socialMedia(url){
        window.open(url)
        return false;
}

  return (
    <div id={styles.main}>
        <section>
            <div id={styles.header}>
                <div className={styles.update}>
                <div className={styles.designUpdate1}>
                    <p className={styles.updated}>UPDATED</p>
                    <p className={styles.date}>25.09.2019</p>
                </div>
                <div className={styles.designUpdate2}>
                    <p className={styles.updated}>DEVELOPED</p>
                    <p className={styles.date}>Jennifer Bassey</p>
                </div>
                </div>
                <div  id={styles.headerDisplay}>
                    <div id={styles.headerImage}>
                        <img src={require('../images/profile.png')} alt="profile-pic" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.WrapperDeveloperDesigner}>
                <div id={styles.developerDesigner}>Developer + Designer<span id={styles.star}>*</span></div>
            </div>
        </section>
        <section>
            <div id={styles.iconWrapper}>
                <div id={styles.adjustIcon}>
                <div className={styles.socialIcon}>
                    <a onClick={()=>socialMedia("https://github.com/janwa039")}><i className="fa fa-github style-icons"></i></a>
                </div>
                <div className={styles.socialIcon}>
                    <a onClick={()=>socialMedia("https://www.facebook.com/bassey.a.jennifer?ref=bookmarks")}><i className="fa fa-facebook"></i></a>
                </div>
                <div className={styles.socialIcon}>
                    <a onClick={()=>socialMedia("https://twitter.com/jai_bom")}><i className="fa fa-twitter style-icons"></i></a>
                </div>
                <div className={styles.socialIcon}>
                    <a onClick={()=>socialMedia("https://www.linkedin.com/in/jennifer-affiong-bassey-8ba407139/")}><i className="fa fa-linkedin style-icons"></i></a>
                </div>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.paragraph}>
                <div className={styles.aboutMe}>
                I am Nigerian. Before coming to canda 2012, 
                i had no idea if i wanted to be a software developer.
                 I have always been surrounded by doctors, nurses and so on. 
                 All i know was back then i wanted to be a surgeon or pilot nothing more. 
                 Thankfully i had a friend who introduced me to something called photoshop to design with. 
                 since i didnt get the whole idea behind programming then. 
                 As time passed and as i got more curious i wanted to make those design more functional, 
                 From there on i started learning a language called javascript. Since then things got better 
                 and instresting and i look for ways to get beeter as a developer. 
                 I am not perfect but am always willing to put my best foot foward to learn and grow.
                  Also want to be in a position where i can also help others grow years from now following this career path as a web developer. 
                  I love building websites and Designing. Skills:Javascript, HTML, CSS, reactJS, Adobe photoshop/sketch Redux., redux saga.
                </div>
            </div>

        </section>
        <section>
            <div id={styles.informationWrapper}>
                <div className={styles.Information} id={styles.information1}>
                    <div className={styles.pages}><div className={styles.animatedPage}> <Link className={styles.link} to='/project'>PROJECTS</Link></div></div>
                </div >
                <div className={styles.Information}>
                    <div className={styles.pages}><div className={styles.animatedPage}><Link className={styles.link} to='/resume'>RESUME</Link></div></div>
                    <div className={styles.animatedPage}></div>
                </div>
                <div className={styles.Information}>
                    <div className={styles.pages}><div className={styles.animatedPage}><Link className={styles.link} to='/contact'>CONTACT</Link></div></div>
                    <div className={styles.animatedPage}></div>
                </div>
            </div>
        </section>
        <section>
            <div className={styles.pageFooter}>
                copyright@ Jennifer Bassey 2019

            </div>
        </section>
    </div>
  );
}

export default LandingPage;