import React from "react";

export const VideoUrl = (props) => {
    
    return (
        
            <div className="card">
                <iframe
                    width="560"
                    height="315"
                    src={'https://www.youtube.com/embed/' + props.url}
                    title="YouTube video player"
                    
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>{" "}
            </div>

    )
}
