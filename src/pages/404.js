import React from 'react'

const NotFoundPage = () => (
  <div style={{
  	fontFamily: 'Helvetica Neue',
    fontWeight: 300,
    letterSpacing: '1px',
    lineHeight: 1.8,
    fontSize: '0.9em',
    margin: '0 1em',
    textAlign: 'center',
  }}>
  	<br/>
    <h1>404 - PAGE NOT FOUND</h1>
    <img src="https://uboachan.net/warc/src/1340433133397.jpeg"/>
    <p>We couldn't find the page you requested.</p>
  	<a href="/">return home</a>
  </div>
)

export default NotFoundPage
