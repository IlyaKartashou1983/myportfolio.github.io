import React from 'react';
import a from './AboutMe.module.css';
const AboutMe = () => {
    return (
        <div className={a.sectionAboutMe}>
            <div className={a.aboutMe}>
                <div className={a.hello}>
              <div>Привет!</div>
              <div>Меня зовут Илья Карташов.</div>
              <div>Я front-end разработчик</div>
                </div>


                <div className={a.item}></div>
            </div>
        </div>
    )
}

export default AboutMe;
