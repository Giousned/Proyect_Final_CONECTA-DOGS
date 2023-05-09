import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./CaregiversStyles.css";


const CaregiverCard = ({ imgSrc, title, description, province }) => {

    return (
        <>
            <div class="card card-caregiver-list">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={imgSrc}
                            class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{title}</h5>
                            <p class="card-text">{description}</p>
                            <p class="card-text"><i class="fas fa-map-marker-alt"></i> {province}</p>
                            <div className="justify-content-md-end">
                                <Link to="/caregiver-info" className="action-button shadow animate blue">Ver más información</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CaregiverCard;

