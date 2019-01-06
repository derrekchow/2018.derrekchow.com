import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Column from '../components/Column'
import ListItem from '../components/ListItem'
import Category from '../components/Category'
import Skill from '../components/Skill'
import { Github, Linkedin, Mail, ChevronDown } from 'react-feather';


import '../styles/index.css'

const Intro = () => (
  <div style={{
      padding: '3.5em 0',
    }}>
    <h1><span>Derrek Chow</span></h1>
    I'm a software developer, organizer at <a href="https://hackthenorth.com/" target="_blank">Hack the North</a>, and Software Engineering student at the University of Waterloo.
    <br/><br/>
    <a href="../static/DerrekChowResume.pdf" target="_blank" >Check out my resume</a>
    <br/><br/>
    <a className="icon" href="https://github.com/derrekchow" target="_blank"><Github/></a>
    <a className="icon" href="https://www.linkedin.com/in/derrekchow/" target="_blank"><Linkedin/></a>
    <a className="icon" href="mailto:me@derrekchow.com"><Mail/></a>
  </div>
)

const Main = () => (
  <div>
    <Column>
      <Category title="Experience">
        <ListItem title="Full Stack Developer Intern" desc="Tulip Retail" date="" link="https://tulip.com/">
          PHP, MySQL, JavaScript, Framework7, HTML/CSS
        </ListItem>
        <ListItem title="Fellow" desc="Myplanet" date="" link="http://fellowship.myplanet.com/">
          JavaScript, MySQL
        </ListItem>
        <ListItem title="Software Developer Intern" desc="Viceroy Media Inc." date="" link="https://viceroymedia.net">
          JavaScript, HTML/CSS
        </ListItem>
      </Category>
      <Category title="Hackathons">
        <ListItem link="https://devpost.com/software/hungr-ai" title="Hungr.ai" desc="HackWestern IV" date="AI version of the game Hungry Hungry Hippos" trophy="true">
          Python, WebSockets, Flask, OpenCV
        </ListItem>
        <ListItem link="https://devpost.com/software/hack-the-fridge" title="Hack the Fridge" desc="Hack the North" date="Fridge that that creates recipes based on the food placed inside it">
          Python, Node, Express, IBM Watson API, Swift, AWS
        </ListItem>
        <ListItem link="https://devpost.com/software/point-to-speech-rvsa0y" title="Point 2 Speech" desc="MasseyHacks III" date="Assitive device that speak out loud text on a page when pointed to in real time" trophy="true">
          Python, Node, Tesseract.js, LeapJS
        </ListItem>
        <ListItem link="https://devpost.com/software/my-maestro" title="Pinch Perfect" desc="Hack Western III" date="Digital musical instrument that is played using the movement of the user's hands">
          PHP, MySQL, JavaScript, LeapJS, HTML/CSS
        </ListItem>
      </Category>
      <Category title="Projects">
        <ListItem link="https://www.tedxuw.com/" title="www.tedxuw.com" date="Website for the 2018 TEDxUW conference">
          React, Javascript, HTML/SCSS
        </ListItem>
        <ListItem link="https://github.com/edwinzhng/automatic-cannon" title="Self-aiming cannon" date="Spring-loaded mini cannon, tracks and fires at target using facial recognition">
          Python, Go, Skybiometry API 
        </ListItem>
        {/*<ListItem link="http://18.221.15.32" title="wohWiki" date="Combines a wikiHow article and picture with a random step" />*/}
        <ListItem link="http://wikinotes.000webhostapp.com/" title="wikiNotes" date="Platform for student uploaded study notes, TU20 Cup 3rd place" trophy="true">
          JavaScript, Material Design Lite, HTML/CSS
        </ListItem>
        <ListItem link="http://iroquoisridge.github.io/ridgeclubs/" title="Ridge Clubs" date="Website for the clubs at Iroquois Ridge High School">
          JavaScript, Material Design Lite, HTML/CSS
        </ListItem>
        <ListItem link="http://iroquoisridge.github.io/ridgehacks/" title="Ridge Hacks" date="Website for Ridge Hacks hackathon, founder and director">
          JavaScript, HTML/CSS
        </ListItem>
      </Category>
    </Column>
  </div>
)

export default () => (
  <div style={{
    flexWrap: 'wrap',
    margin: 'auto',
    maxWidth: '40em',
    lineHeight: 1.7,
  }}> 
    <Helmet
          title='Derrek Chow'
          meta={[
            { name: 'description', content: 'Software Engineering student at the University of Waterloo.' },
            { name: 'keywords', content: 'software, engineer, waterloo, student' },
            { name: 'viewport', content: 'width=device-width' }
          ]}
    />
    <Intro/>
    <Main/>
    <footer style={{opacity: 0.3, paddingBottom: '3em'}}>© Derrek Chow 2018<br/>Made with React</footer>
  </div>
)