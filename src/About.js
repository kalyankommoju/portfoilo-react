import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(){
    return(
      <Container id="about-main">
        <Row>
          <Col xs={12} md={6}>
          <h1>Know Who<span> I'M</span></h1><br/>
          <h5>Hi Everyone, I am <span>Kommoju Sri Naga Surya Kalyan</span> from <span>Vijayawada, India.</span></h5>
          <h5>I am currently <span>pursuing my Bachelor degree</span> in <span>Commerce (BPM)</span> at PB siddhartha collage</h5>
          <h5>I am a <span>proficient and dynamic</span> professional with a diverse skill set that spans <span>both technical and business</span> domains.</h5>
          <h5 style={{marginTop:'9%'}}>Apart from coding, some other activities that I love to do!</h5>
          <ul>
            <li>Understanding Financial Market</li>
            <li>Learning about Ai tools</li>
            <li>Watching Sci-Fi Movies <i class="fa-regular fa-face-laugh-wink"></i></li>
          </ul>
          </Col>
          <Col xs={12} md={6}>
          <img src="https://ouch-cdn2.icons8.com/uZVLKzsyMULqmJtzTut9qmDdScFq23wXiVEMtduHr2k/rs:fit:368:319/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTM1/LzRlNmM4Y2M5LTM5/YzktNDIyMy04Mjgz/LWY2YTg3MWY4NTVh/MC5zdmc.png" id="about-img"/>
          </Col>
        </Row>
        <Row>
          <center style={{marginTop:'7%'}}><h1>Professional <span>Skillset</span></h1></center>
          <Col>
          <div id="skill-box">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" id="skill-icon"/>
          <img src="https://static-00.iconduck.com/assets.00/flask-icon-2048x1826-nxzeqh6a.png" id="skill-icon"/>
          <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" id="skill-icon"/>
          <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" id="skill-icon"/>
          <img src="https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png" id="skill-icon"/>
          <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" id="skill-icon"/><br/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" id="skill-icon"/>
          <img src="https://static-00.iconduck.com/assets.00/material-ui-icon-2048x1626-on580ia9.png" id="skill-icon"/>
          <img src="https://static-00.iconduck.com/assets.00/mysql-original-wordmark-icon-2048x1064-jfbaqrzh.png" id="skill-icon"/>
          <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" id="skill-icon"/>
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.png" id="skill-icon"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Jupyter_logo.svg/1767px-Jupyter_logo.svg.png" id="skill-icon"/>
          </div>
          </Col>
        </Row>
        <footer id="footer">
          <p>Copyright © 2024 Kalyan</p>
        </footer>
      </Container>
    )
}
export default About;