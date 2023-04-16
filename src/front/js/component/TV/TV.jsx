import React from "react";
import "../TV/tv.css"

import videoConectaDogs from "../../../video/video_conectadogs_1.mp4"

const TV = () => {
    return (
        <div class="container-tv">
            <div class="tv">
                <input type="checkbox" class="switchinput" checked />
                <div class="switch"></div>
                <div class="video">
                    <video id="vid" autoplay="" muted="" loop="" width="100%" height="100%">
                        <source id="mp4"
                            src={videoConectaDogs}
                            type="video/mp4" />
                    </video>
                </div>
                <div class="cover"></div>
            </div>
        </div>
    );
};

export default TV;