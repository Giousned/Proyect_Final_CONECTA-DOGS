import React from "react";

const ServiceCard = ({ imgSrc, title, description, btnText }) => {
    return (
        <div className="col-12 col-md-4">
            <section className="mx-auto my-5 custom-card">
                <div className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient"></div>
                    <div className="avatar mx-auto white">
                        <img src={imgSrc} className="img-fluid" alt="" />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title font-weight-bold">{title}</h4>
                        <hr />
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceCard;


{/* <a href="#" className="btn btn-primary">
{btnText}
</a> */}