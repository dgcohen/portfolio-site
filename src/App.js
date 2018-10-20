import React, { Component } from 'react';
import resume from './assets/pdf/diegocohen.pdf'

class App extends Component {
  render() {
    return (
    	<div id="main">
	    	<header id="header">
	    		<div className="header-wrapper">
	    			<h1>Diego Cohen</h1>
	          <div id="main-nav">
	            <div id="hamburger" aria-label="Expand main menu">
							  <span></span>
							  <span></span>
							  <span></span>
							</div>
	            <ul aria-expanded="false" role="navigation" aria-label="Main navigation">
	              <li><a href="#about">About</a></li>
	              <li><a href="#projects">Projects</a></li>
	              <li><a href={resume} target="_blank">Resume</a></li>
	            </ul>
	          </div> 
	    		</div>
	      </header>
	      <section id="hero">
	      	<div className="text">
	      		<h2>Front End Software Engineer</h2>
	      		<div className="specialties-wrapper">
		      		<ul className="specialties">
		      			<li>React</li>
		      			<li>Node.js</li>
		      			<li>Javascript ES6</li>
		      			<li>GraphQL</li>
		      			<li>SASS/CSS3</li>
		      		</ul>
		      		<div className="image"></div>
	      		</div>
	      	</div>
	      </section>
	      <section id="about">
	      	<div className="text">
	      		<h3>About Me</h3>
	      		<p>I'm a software engineer based in New York City specializing in React, Node.js,
	      		 Javascript ES6, GraphQL, and SASS/CSS3.</p>
	      		 <p>With a background in music composition and video art, I have spent the last four years as Front End Software Engineer, I've built pixel-perfect, responsive, WCAG Acessible
	      		 websites for clients including <a href="https://www.juilliard.edu/" target="_blank">Juilliard</a>, <a href="http://www.virginia.edu/" target="_blank">University of Virginia</a>, <a href="https://gsas.columbia.edu/" target="_blank">Columbia GSAS</a>, <a href="https://www.sps.nyu.edu/" target="_blank">NYU SPS</a>, <a href="https://www.alvarezandmarsal.com/" target="_blank">Alvarez and Marsal</a>, and <a href="https://research.cornell.edu/" target="_blank">Cornell Research</a>.</p>
	      		 <p>Recently I have immersed myself in full-stack Javascript programming, with an emphasis on React and Node.js. Please have a look at some of my personal React projects below, all the code can be found on my <a href="https://github.com/dgcohen" target="_blank">GitHub</a>.</p>
	      		 <a className="contact" href="#contact">Get in touch</a>
	      	</div>
	      	<div className="image"></div>
	      </section>
	      <section id="projects">
	      	<h3>Personal Projects</h3>
	      	<ul className="projects">
            <li>
              <a href="https://chess-react.herokuapp.com/" target="_blank"><img src={require('./assets/img/chess.jpg')} /></a>
	      			<h4><a href="https://chess-react.herokuapp.com/" target="_blank">React Chess</a></h4>
              <div className="links"><a href="https://chess-react.herokuapp.com/" target="_blank">Live Demo</a><a href="https://github.com/dgcohen/react-chess" target="_blank">GitHub</a></div>
	      			<p>A single page chess app using a custom object-oriented chess engine built in React and custom SCSS.</p>
	      		</li>
	      		<li>
              <a href="http://asteroids-js.herokuapp.com/" target="_blank"><img src={require('./assets/img/asteroids.jpg')} /></a>
	      			<h4><a href="http://asteroids-js.herokuapp.com/" target="_blank">Asteroids.js</a></h4>
              <div className="links"><a href="http://asteroids-js.herokuapp.com/" target="_blank">Live Demo</a><a href="https://github.com/dgcohen/asteroids-js" target="_blank">GitHub</a></div>
	      			<p>An asteroids game built with prototype-based OOP Javascript. HTML5 Canvas used for live-rendering.</p>
	      		</li>
	      		<li>
              <a href="http://callstack-exceeded.herokuapp.com" target="_blank"><img src={require('./assets/img/callstack.jpg')} /></a>
	      			<h4><a href="http://callstack-exceeded.herokuapp.com" target="_blank">Callstack Exceeded</a></h4>
              <div className="links"><a href="http://callstack-exceeded.herokuapp.com" target="_blank">Live Demo</a><a href="https://github.com/dgcohen/Callstack-Exceeded" target="_blank">GitHub</a></div>
	      			<p>A question and answer app for programmers based on Stack Overflow built with Rails 4 back-end with a custom RESTful API and Javascript and Backbone.js front-end for live-updating features.</p>
	      		</li>
	      	</ul>
	      </section>
	      <section id="contact">
	      	<p>Want to work with me? <em>Get in touch!</em></p>
	      	<a className="contact" href="#contact">Contact Info</a>
	      </section>
    	</div>
    );
  } 
}

export default App;
