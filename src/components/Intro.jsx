import React from 'react';

const Intro = () => {
    return (
        <div class="intro-div">
            <div class=" intro">
                <h2 class="intro-heading">Great Monitors to choose from!</h2>
                <p class="intro-text">Download our app today.</p>
                <button type="button" class="download-button"><i class="fab fa-apple"></i> Download</button>
                <button type="button" class="download-button"><i class="fab fa-google-play"></i> Download</button>
            </div>
            <div>
                <img class="headingImage" src="/images/Monitor.png" alt="Monitor"/>
            </div>
        </div>
    )
}

export default Intro;
