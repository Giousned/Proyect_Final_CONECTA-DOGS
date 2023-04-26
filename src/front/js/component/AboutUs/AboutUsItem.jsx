import React from "react";

import "../AboutUs/about-us.css";

const AboutUsItem = ({ icon, title, description }) => {
    return (<>
        <div className="col-12 col-md-3 p-3">
            <div className="numbers-green">
                <i className={icon}></i>
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    </>
    );
};

export default AboutUsItem;
