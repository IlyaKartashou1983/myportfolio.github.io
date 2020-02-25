import React from 'react';
import c from "./MyProjects.module.css"
import MyProject from "./MyProject";

const MyProjects = () => {
    return (
        <div className={c.sectionProjects}>
            <div className={c.myProjects}>
               <div className={c.myProjects_header}>
                    <span>Мои работы</span>
                </div>

                        <MyProject />
                        <MyProject />

            </div>
        </div>
    )
}

export default MyProjects;
