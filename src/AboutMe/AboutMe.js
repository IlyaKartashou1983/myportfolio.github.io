import React from 'react';
import a from './AboutMe.module.css';
const AboutMe = () => {
    return (
        <div className={a.sectionAboutMe}>
            <div className={a.aboutMe}>
                <span>Привет!Меня зовут Илья Карташов.Я front-end разработчик</span>
                <div className={a.item}></div>
            </div>
        </div>
    )
}

export default AboutMe;
