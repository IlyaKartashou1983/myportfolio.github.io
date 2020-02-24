import React from 'react';
import c from "./MyProjects.module.css"
import MyProject from "./MyProject";

const MyProjects = () => {
    return (
        <div className={c.section3}>
            <div className={c.myProjects}>
               <div className={c.myProjects_header}>
                    <span>Мои работы</span>
                </div>
                <div className={c.examples}>
                    <div className={c.example}>
                        <MyProject />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyProjects;
