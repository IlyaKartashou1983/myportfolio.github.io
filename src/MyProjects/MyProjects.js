import React from 'react';
import c from "./MyProjects.module.css"
import MyProject from "./MyProject";

const MyProjects = () => {
    return (
        <div>
            <div className={c.sectionProjects}>
                <span>Мои работы</span>
                <div className={c.myProjects}>


                    <MyProject/>
                    <MyProject/>
                </div>
            </div>
        </div>

    )
}

export default MyProjects;
