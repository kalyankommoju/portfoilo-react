import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import turisum from "./images/turisum.png";
import weather from "./images/weather.png";
import todolist from "./images/todolist.png";
import calculator from "./images/calculator.png";


function projects() {
  return (
    <div id='project-main'>
    <center id='project-head'>
        <h1>My Recent Works</h1>
        <h5 style={{fontWeight:"400", fontSize:'18px'}}>Here are few projects I've worked recently.</h5>
    </center>
    <div id='div-id' className='div-class'>
      <Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image="https://images.fonearena.com/blog/wp-content/uploads/2020/06/Touchless-cash-withdrawals-smartphone-India.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Cardless ATM Application
        </Typography>
        <Typography variant="body2">
        Developed Python backend for ATM application enabling card/cardless transactions, balance checking, and user account management
        </Typography>
      </CardContent>
      <CardActions style={{display:'flex', justifyContent:'center'}}>
        <a href="https://github.com/kalyankommoju/ATM-application" id='a'><i class="fa-brands fa-github"></i> GitHub</a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image={turisum}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Tourism page
        </Typography>
        <Typography variant="body2">
        Designed a tourism website that is visually appealing and responsive, providing an enjoyable browsing experience across various devices.
        </Typography>
      </CardContent>
      <CardActions id='CardAction'>
        <a href="https://github.com/kalyankommoju/Tourism" id='a'><i class="fa-brands fa-github"></i> GitHub</a>
        <a href='https://tourism-ruby.vercel.app/' id='a'>Demo <i class="fa-solid fa-laptop-code"></i></a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image={weather}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        weather Report page
        </Typography>
        <Typography variant="body2">
        I created a website that shows up-to-date weather reports in real time by integrating with an API.
        </Typography>
      </CardContent>
      <CardActions id='CardAction'>
        <a href='https://github.com/kalyankommoju/weather-report' id='a'><i class="fa-brands fa-github"></i> GitHub</a>
        <a href='https://weather-report-ekze.vercel.app/' id='a'>Demo <i class="fa-solid fa-laptop-code"></i></a>
      </CardActions>
    </Card>
    </div>
    <div id='div-id' className='div-class'>
    <Card sx={{ maxWidth: 345 }} id="cardd">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image={todolist}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          To-Do-List
        </Typography>
        <Typography variant="body2">
        Developed and maintained a versatile to-do-list application, facilitating efficient task management through intuitive user interface and seamless task organization features.
        </Typography>
      </CardContent>
      <CardActions id='CardAction'>
        <a href="https://github.com/kalyankommoju/To-Do-List" id='a'><i class="fa-brands fa-github"></i> GitHub</a>
        <a href="https://to-do-list-rho-plum.vercel.app/" id='a'>Demo <i class="fa-solid fa-laptop-code"></i></a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image={calculator}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          calculator
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Designed and implemented a comprehensive calculator application offers users a versatile tool for basic arithmetic operations, including addition, subtraction, multiplication, and division
        </Typography>
      </CardContent>
      <CardActions id='CardAction'>
        <a href='https://github.com/kalyankommoju/calculator' id='a'><i class="fa-brands fa-github"></i> GitHub</a>
        <a href='https://calculator-tau-henna.vercel.app/' id='a'>Demo <i class="fa-solid fa-laptop-code"></i></a>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }} id="card">
      <CardMedia
        sx={{ height: 140 }} id='project-img'
        image='https://www.analyticsinsight.net/wp-content/uploads/2023/06/Can-OpenAIs-ChatGPT-Replace-Google-Translate-Lets-Find-Out.jpg'
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Translate
        </Typography>
        <Typography variant="body2" color="text.secondary">
        I have developed a language translation project that makes the task of translating text into multiple languages more efficient. This project utilizes the Google Translate library to streamline the translation process.
        </Typography>
      </CardContent>
      <CardActions id='CardAction'>
        <a href='https://calculator-tau-henna.vercel.app/' id='a'>Demo <i class="fa-solid fa-laptop-code"></i></a>
      </CardActions>
    </Card>
    </div>
    <footer id="footer">
          <p>Copyright © 2024 Kalyan</p>
        </footer>
    </div>
  );
}
export default projects;