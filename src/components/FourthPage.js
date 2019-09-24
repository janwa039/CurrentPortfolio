import React from 'react';
import '../styles/fourthPage.css';

function FourthPage() {
    function socialMedia(url){
        window.open(url)
        return false;
      }

    return (
        <div className = 'wrapperFourth'>
            <div className="project-warpper">
                <div className="each-project">
                    <a className="icon-btn2" onClick={()=>socialMedia("https://www.facebook.com/bassey.a.jennifer?ref=bookmarks")}>
                    <i className="fa fa-facebook-f style-icons"></i>
                    </a>
                </div>
                <div className="each-project">
                <a className="icon-btn2"  onClick={()=>socialMedia("https://twitter.com/jai_bom")}>
                    <i className="fa fa-twitter style-icons"></i>
                </a>
                </div>
                <div className="each-project">
                <a className="icon-btn2" onClick={()=>socialMedia("https://github.com/janwa039")}>
                    <i className="fa fa-github style-icons"></i>
                </a>
                </div>
                <div className="each-project">
                <a className="icon-btn2"  onClick={()=>socialMedia("https://www.linkedin.com/in/jennifer-affiong-bassey-8ba407139/")}>
                    <i className="fa fa-linkedin style-icons"></i>
                </a>
                </div>

            </div>
            <div className="footer2">
                <div className="contact-info">
                    2019 @Jennifer Bassey
                </div>
                <div className="social-info"></div>

            </div>

        </div>
    )
} 
export default FourthPage;