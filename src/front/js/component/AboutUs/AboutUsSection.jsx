import React from "react";

import "../AboutUs/AboutUsStyles.css";

const AboutUsSection = ({ children }) => {
    return (
        <section className="about-us">
            <div className="container my-4 p-4 border rounded-3">
                <div className="row"> {children} </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
