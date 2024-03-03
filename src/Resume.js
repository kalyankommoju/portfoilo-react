import React from "react";
import img1 from "./images/resume.jpg";
import file from "./images/resume.pdf";


function Resume(){
    return(
        <div id="resume">
            <center>
                <a href={file} download="resume.jpg">
                    <button id="button"><i class="fa-solid fa-circle-down" id="but-icon"></i>Download CV</button>
                </a><br/>
                <img src={img1} alt="resume" style={{width:"95%", marginTop:"2%", marginBottom:"2%"}} id="img"/><br/>

                <a href={file} download="resume.jpg">
                    <button id="button"><i class="fa-solid fa-circle-down" id="but-icon"></i>Download CV</button>
                </a><br/>
                <p id="footer">Copyright © 2024 Kalyan</p>
            </center>
        </div>
    )
}

export default Resume;
