import React from "react";
import "../TV/tv.css"

import videoConectaDogs from "../../../video/video_conectadogs_1.mp4"

const TV = () => {
    return (
        <div className="container-tv">
            <div className="tv">
                <input type="checkbox" className="switchinput" checked />
                <div className="switch"></div>
                <div className="video">
                    <video id="vid" autoplay="" muted="" loop="" width="100%" height="100%">
                        <source id="mp4"
                            src={videoConectaDogs}
                            type="video/mp4" />
                    </video>
                </div>
                <div className="cover"></div>
            </div>
        </div>
    );
};

export default TV;