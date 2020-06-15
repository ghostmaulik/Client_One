import React from 'react';
import './App.css'
import { useDencrypt } from "use-dencrypt-effect";
import { Box, Button, ButtonBase } from '@material-ui/core';
import python from './Images/python.png';
import java from './Images/java.png';
import vue from './Images/vue.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaPython, FaVuejs, FaAngular, FaPhone, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ButtonBases from './Components/Images';
import ImageGridList from './Components/Features';
import MyCode from './Components/code';
import SignUp from './Components/SignUp';
import SplashScreen from './Components/SplashScreen';
import MyAppBar from './Components/AppBar';
import MyAppBaMobile from './Components/mAppBar';

const values = ["<Hello World/>", "Coding is Awesome", "Keep Calm And Code", "Machine Learning"];


export default function Home() {
  const [screen, setScreen] = React.useState(true);
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    setScreen(true)
    setInterval(() => { setScreen(false) }, 2000);
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  if (screen) {
    return <SplashScreen />
  }

  else {
    return (
      <React.Fragment>
        <div className='responsive' >
          <MyAppBar />
          <div class='wallpaper' ></div>
          <div class='para'>
            <Box boxShadow={10} style={{ height: 'auto', width: '600px' }} ><div class='bg-text'>{result}</div></Box>
            <Box boxShadow={10} style={{ height: 'auto', width: '600px' }} ><div class='long-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div></Box>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'white', width: '100%', boxShadow: '2px 2px 20px' }} >
            <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0px 20px', width: '100%', backgroundColor: 'white' }} >
              <div class='imgC' ><img alt="img" src={python} class='image' width='200px' height='200px' style={{ marginTop: '20px' }} /><div class='sub' >Python</div></div>
              <div><img alt="img" src={java} class='image' width='200px' height='200px' style={{ marginTop: '20px' }} /><div class='sub' >Java</div></div>
              <div><img alt="img" src={vue} class='image' width='200px' height='200px' style={{ marginTop: '20px' }} /><div class='sub' >Vue</div></div>
            </div>
          </div>
          <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around' }} >
            <Box style={{ width: '90%', marginTop: '40px', borderRadius: '40px' }}>
              <div class='heading' >
                Learn Trending And Potential Languages....
            </div>
              <div class='long' >
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <FaPython />
                    </ListItemIcon>
                    <ListItemText primary="Coding" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <FaVuejs />
                    </ListItemIcon>
                    <ListItemText primary="Is Awesome" />
                  </ListItem>
                  <ListItem button>
                    <ListItemIcon>
                      <FaAngular />
                    </ListItemIcon>
                    <ListItemText primary="Learn Coding" />
                  </ListItem>
                </List>
              </div>
              <ButtonBase style={{ marginLeft: '40px', marginTop: '40px', marginBottom: '40px' }} >
                <Button class='glow' >
                  ENROLL NOW
          </Button>
              </ButtonBase>
            </Box>
          </div>
          <div style={{ padding: '40px', backgroundColor: 'white' }} >
            <ButtonBases />
          </div>

          <div>
            <ImageGridList />
          </div>

          <div style={{ backgroundColor: 'white', display: 'flex', paddingTop: '40px' }} >
            <MyCode />
            <div class='offers' >
              <div class='features'>{"<Offers/>"}</div>
              <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignContent: 'center' }} >

              </div>
            </div>
          </div>
          <div style={{ backgroundColor: 'white', height: '100px' }}></div>

          <div style={{ width: '100%', height: '600px', backgroundColor: 'white', padding: '20px' }}>
            <div class='features' style={{ color: 'grey' }} >Testimonials;</div>
          </div>

          <div class='signUp' >
            <SignUp />
          </div>

          <div class='footer' >
            <table style={{ width: '100%', height: '100%' }} >
              <tr>
                <td style={{ fontSize: '50px', fontFamily: 'j' }} >{"</>"}</td>
                <th>Contact</th>
                <th>Help</th>
                <th>About</th>
                <th>Social Media</th>
              </tr>
              <tr>
                <td></td>
                <td><FaPhone color="#FFFF" /> +91 9999 9999 99</td>
                <td> FAQs</td>
              </tr>
              <tr>
                <td></td>
                <td><FaMapMarkerAlt color="#FFFF" /> Map Location</td>
                <td>How to enroll</td>
              </tr>
              <tr>
                <td></td>
                <td><FaEnvelope color="#FFFF" /> someone@exapmle.com</td>
              </tr>
              <tr>
                <td></td>
                <td><FaWhatsapp color="#FFFF" /> WhatsApp</td>
              </tr>
            </table>
          </div>
        </div>
        <div className='mobile' >
          <MyAppBaMobile/>
          <div className='para'>
            <Box boxShadow={10} style={{ height: 'auto', width: '100%',marginTop:'10%'}} ><div class='bg-text'>{result}</div></Box>
            <Box boxShadow={10} style={{ height: 'auto', width: '100%' }} ><div class='long-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div></Box>
          </div>
        </div>
      </React.Fragment>
    );
  }
}