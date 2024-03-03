import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home(){
    return(
        <Container>
        <Row id="row">
          <Col>
            <div id="home-text">
            <h1> Hi There! </h1>
            <h1>I'M <span>KALYAN KOMMOJU</span></h1>
            <h1 style={{marginTop:"6%", color:"#662d91"}} id='typing' >FULL STACK DEVELOPER</h1>
            </div>
          </Col>
          <Col>
          <img src='https://ouch-cdn2.icons8.com/U9H4RLWzvsjdw-hiklnD-Cj33Zfysi8dZlRvfHdGX7Q/rs:fit:368:286/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjQy/LzFkZDEwMTlhLTE0/YTktNGQzOS1iYjMz/LWQ2MjA4NzNmMzU4/Zi5zdmc.png' id="home-img"/>
          </Col>
        </Row>
        <Row id="row">
            <Col>
            <div id="home-text2">
            <h1 id="home-sp">LET ME INTRODUCE MYSELF <i class="fa-regular fa-face-grin-beam-sweat"></i></h1>
            <h5 id="home-h6">I fell in love with programming and I have at least learnt something, I think… </h5>
            <h5 id="home-h6">I am fluent in classics like <span>Python, MYSQL and HTML/CSS</span></h5>
            <h5 id="home-h6">My field of Interest's are building new <span>Web Technologies and Products</span>and also in<br/>areas related to <span>Front-end</span></h5>
            <h5 id="home-h6">Whenever possible, I also apply my passion for developing products with <span>Python</span></h5><h5 id="home-h6">and <span>Modern Javascript Library and Frameworks</span> like <span>React.js and Material Ui</span></h5>
            </div>
            </Col>
            <Col>
            <img src="https://ouch-cdn2.icons8.com/E5mDAIYZ357Dawi89UFOKHy69DV6T9cPv72HUKp1KVU/rs:fit:368:276/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDgz/L2Y0ODM2ZGZjLWQw/NjYtNDY5Mi05NTdk/LWI1OTJkNWYzNjVi/Zi5zdmc.png" id="home-img2"/>
            </Col>
        </Row>
        <div id="home-last">
        <center>
            <h1>FIND ME ON</h1>
            <p>Feel free to connect with me</p>
            <div id="home-icon">
                <a href="https://github.com/kalyankommoju"><i class="fa-brands fa-github" id="icon"></i></a>
                <a href="https://www.linkedin.com/in/kalyan-kommoju/"><i class="fa-brands fa-linkedin-in" id="icon"></i></a>
                <a href="https://www.instagram.com/kalyan.0x/"><i class="fa-brands fa-instagram" id="icon"></i></a>
                <a href="https://twitter.com/kalyan_0x"><i class="fa-brands fa-x-twitter" id="icon"></i></a>
            </div>
        </center>
        </div>
        <footer id="footer">
          <p>Copyright © 2024 Kalyan</p>
        </footer>
      </Container>
    )
}

export default Home;

{/* <a href="https://api.whatsapp.com/send?phone=919059418925" target="_blank" class="facebook" data-toggle="modal" data-target="#popupRegistr">WhatsApp</a> */}