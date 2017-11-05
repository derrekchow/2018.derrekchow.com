import React from 'react'
import Link from 'gatsby-link'
import Column from '../components/column'
import ListItem from '../components/listitem'
import Category from '../components/category'

import {FaLinkedin, FaEnvelope, FaTrophy} from 'react-icons/lib/fa'

import './index.css'

const Intro = () => (
  <div align="center" style={{ 
    margin:'auto',
    fontSize:'1.7em',
    lineHeight:1.5,
    maxWidth: '20em',
    paddingTop: '5rem',
    padding: '2em 0',

  }}>
    I'm <b>Derrek Chow</b>, a software developer and student currently studying Software Engineering at the University of Waterloo.
    <br/>
    <a style={{
      fontSize: '.7em',
      fontWeight: 500,
    }} href="DerrekChow.pdf" target="_blank" >Check out my resume</a><br/>
    <a className="icon" href="https://www.linkedin.com/in/derrekchow/" target="_blank"><FaLinkedin/></a>
    <a className="icon" href="mailto:me@derrekchow.com"><FaEnvelope/></a>
  </div>
)

const Main = (props) => (
  <div style={{
    display: 'flex',
    margin: 'auto',
    textAlign: 'left',
    justifyContent: 'space-between',
    maxWidth: '40em',
    flexWrap: 'wrap',
  }}>
  {props.children}
  </div>
)

export default () => (
  <div class="Bounce" style={{
    fontFamily: 'Crimson Text',
    'padding': '0 1rem',
    'textAlign': 'center',
  }}>
      <Intro />
      <hr style={{
        maxWidth: '40em',
        margin: 'auto',
        marginBottom: '3em',
        opacity: .2,
      }}/>
      <Main>
        <Column>
          <Category title="EXPERIANCE">
            <ListItem link="https://viceroymedia.net" title="Viceroy Media Inc." desc="Software Developer Intern"/>
            <ListItem link="https://www.myplanet.com/" title="Myplanet" desc="Fellow"/>
          </Category>
        </Column>
        <Column>
          <Category title="WORK & PROJECTS">
            <ListItem link="http://18.221.15.32" title="wohWiki" desc="A randomized WikiHow step generator."/>
            <ListItem link="http://wikinotes.000webhostapp.com/" title="wikiNotes" desc="Platform for student uploaded study notes."/>
            <ListItem link="http://iroquoisridge.github.io/ridgeclubs/" title="Ridge Clubs" desc="Website for the clubs at Iroquois Ridge High School."/>
            <ListItem link="http://iroquoisridge.github.io/ridgehacks/" title="Ridge Hacks" desc="Website for Ridge Hacks hackathon."/>
            <ListItem link="http://uog.viceroymedia.net/" title="UoG Exam Network" desc="Platform for exam, teacher, and course review created for the University of Guelph."/>
          </Category>
        </Column>
        <Column>
          <Category title="HACAKTHONS">
            <ListItem link="https://devpost.com/software/hack-the-fridge" title="Hack the North" desc="Hack the Fridge" date="Sept. 2017"/>
            <ListItem link="https://devpost.com/software/point-to-speech-rvsa0y" title="MasseyHacks III  &#127942;" desc="Point 2 Speech" date="Apr. 2017"/>
            <ListItem link="https://devpost.com/software/my-maestro" title="Hack Western III" desc="Pinch Perfect" date="Oct. 2016"/>
            <ListItem link="https://devpost.com/software/3-to-1-time-manager" title="MasseyHacks II" desc="3to1 Timer" date="Apr. 2016"/>
            <a style={{
              fontFamily: 'Quicksand',
              fontSize: '.8em',
              borderBottom: '1px dotted #2196F3',
              fontWeight: 400,
              color: 'black',
              textDecoration: 'none',
              opacity: .5,
            }} 
            href="https://iroquoisridge.github.io/ridgehacks/" target="_blank">I also ran my own<br/> hackathon at my<br/> school</a>
          </Category>
        </Column>
      </Main>
      <br/><br/><br/>
  </div>
)