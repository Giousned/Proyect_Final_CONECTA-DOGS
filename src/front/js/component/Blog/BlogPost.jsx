import React from "react";

const BlogPost = ({ imageUrl, title, description, url }) => {
    return (
        <>
            <div className="card">
                <img src={imageUrl} className="img-thumbnail" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">
                        Leer más...
                    </a>
                </div>
            </div>
        </>
    );
};

export default BlogPost;