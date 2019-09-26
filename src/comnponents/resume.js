import React from 'react';
import styles from '../style/resume.module.css'
import { Link } from 'react-router-dom'



function Resume() {

  return (
      <div id={styles.mainResume}>
          <section>
              <div className={styles.firstSectionWrapper}>
                  <div className={styles.mainwrapper}>
                          <div className={styles.homePage}>
                              <p><Link className={styles.link} to='/'>Go to HomePage</Link></p>
                          </div>
                          <div className={styles.middleContent}>
                              <p>Dig a little </p>
                              <p>deeper.</p>
                          </div>
                          <div className={styles.download}>
                            <a href="../images/" download ="resumenew.pdf"><div className={styles.ResumeDownload}>Download Resume</div></a>
                          </div>
                  </div>
              </div>
          </section>
          <section>
              <div className={styles.experience}>
                  <div className={styles.skills}>
                      <div className={styles.technologies}>Technologies</div>
                      <div className={styles.listofTechnologies}>
                        <ul>
                            <li>JAVASCRIPT(ECMA 6)</li>
                            <li>HTML</li>
                            <li>REACT.JS</li>
                            <li>CSS</li>
                            <li>BOOTSTRAP</li>
                            <li>JQUERY</li>
                            <li>PHOTOSHOP</li>
                            <li>SKETCH</li>
                            <li>CIRCLE CI</li>
                            <li>GITHUB</li>
                            <li>JASMINE</li>
                            <li>JIRA</li>
                            <li>JENKINS</li>
                        </ul> 
                      </div>
                  </div>
                  <div className={styles.skills}>
                    <div className={styles.technologies}>Work experience</div>
                        <div className={styles.listofWorkExperience}>
                            <div className={styles.ribbon}>
                                <p className={styles.title}>Ribbon Communications</p>
                                <p className={styles.date}>October 2018 - present | Ottawa</p>
                            </div>
                            <ul>
                                <li>Redux and Redux-Saga to handle front end logic for things like making
                                calls, setting up video, negotiation between multiple callers and call transferring.</li>
                                <li>Implementing the example web applications with the react framework</li>
                                <li>Implementing the testing framework to facilitate integration tests.</li>
                                <li>Collaborating on GitHub and using JIRA for estimations and work flow.</li>
                                <li>Automating the docs and builds for the docs to be available for the public</li>
                                <li>Reviews, debugging codes</li>
                            </ul>
                            <div className={styles.ribbon}>
                                <p className={styles.title}>Zara</p>
                                <p className={styles.date}>July 2016 - August 2017 | Ottawa</p>
                            </div>
                            <ul>
                                <li>Ensuring we push forward to meet the sales goals of the department for the day.</li>
                                <li>Developed excellent communication skills.</li>
                                <li>Interacted and attended to customers issues effectively.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.skills}>
                    <div className={styles.technologies2}>EDUCATION</div>
                        <div className={styles.listofWorkExperience2}>
                            <div className={styles.ribbon2}>
                                <p className={styles.title2}>UNIVERSITY OF OTTAWA</p>
                                <p className={styles.date2}>B.A.SC. IN COMPUTER ENGINEERING WITH MANAGEMENT OPTION</p>
                                <p className={styles.date2}>Graduation: June 2018</p>
                            </div>
                            <div className={styles.ribbon2}>
                                <p className={styles.title2}>UDACITY</p>
                                <p className={styles.date2}>Graduation: July 2019</p>
                            </div>
                        </div>
                    </div>
                 </div>
            </section>
      </div>
  )
}


export default Resume