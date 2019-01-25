import React, { Component } from "react";
import resume from "./assets/pdf/diegocohen.pdf";

class App extends Component {
  render() {
    return (
      <div id="main">
        <header id="header">
          <div className="header-wrapper">
            <h1>Diego Cohen</h1>
            <div id="main-nav">
              <div id="hamburger" aria-label="Expand main menu">
                <span />
                <span />
                <span />
              </div>
              <ul
                aria-expanded="false"
                role="navigation"
                aria-label="Main navigation"
              >
                <li>
                  <a href="#about" className="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="projects">
                    Projects
                  </a>
                </li>
                <li>
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </li>
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
              <div className="image" />
            </div>
          </div>
        </section>
        <section id="about">
          <div className="text">
            <h3>About Me</h3>
            <p>
              I'm a software engineer based in New York City specializing in
              React, Node.js, Javascript ES6, GraphQL, and SASS/CSS3.
            </p>
            <p>
              With a background in music composition and video art, I have spent
              the last four years as Front End Software Engineer, I've built
              pixel-perfect, responsive, WCAG Acessible websites for clients
              including{" "}
              <a
                href="https://www.juilliard.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Juilliard
              </a>
              ,{" "}
              <a
                href="http://www.virginia.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                University of Virginia
              </a>
              ,{" "}
              <a
                href="https://gsas.columbia.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Columbia GSAS
              </a>
              ,{" "}
              <a
                href="https://www.sps.nyu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                NYU SPS
              </a>
              ,{" "}
              <a
                href="https://www.alvarezandmarsal.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alvarez and Marsal
              </a>
              , and{" "}
              <a
                href="https://research.cornell.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cornell Research
              </a>
              .
            </p>
            <p>
              Recently I have immersed myself in full-stack Javascript
              programming, with an emphasis on React and Node.js. Please have a
              look at some of my personal React projects below, all the code can
              be found on my{" "}
              <a
                href="https://github.com/dgcohen"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
            <a className="contact" href="#contact">
              Get in touch
            </a>
          </div>
          <div className="image" />
        </section>
        <section id="projects">
          <h3>Personal Projects</h3>
          <ul className="projects">
            <li>
              <a
                href="https://react-dev-connect.herokuapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Dev Connect"
                  src={require("./assets/img/devconnect.jpg")}
                />
              </a>
              <h4>
                <a
                  href="https://react-dev-connect.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dev Connect
                </a>
              </h4>
              <div className="links">
                <a
                  href="https://react-dev-connect.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/dgcohen/dev-connect"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <p>
                A social network app for developers built with React, Express, Node, and MongoDB. Features JWT authentication, custom API, and Redux for state management.
              </p>
            </li>
            <li>
              <a
                href="https://chess-react.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="React Chess"
                  src={require("./assets/img/chess.jpg")}
                />
              </a>
              <h4>
                <a
                  href="https://chess-react.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Chess
                </a>
              </h4>
              <div className="links">
                <a
                  href="https://chess-react.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/dgcohen/react-chess"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <p>
                A single page chess app using a custom object-oriented chess
                engine built in React and custom SCSS.
              </p>
            </li>
            <li>
              <a
                href="http://asteroids-js.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Asteroids.js"
                  src={require("./assets/img/asteroids.jpg")}
                />
              </a>
              <h4>
                <a
                  href="http://asteroids-js.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Asteroids.js
                </a>
              </h4>
              <div className="links">
                <a
                  href="http://asteroids-js.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href="https://github.com/dgcohen/asteroids-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
              <p>
                An asteroids game built with prototype-based OOP Javascript.
                HTML5 Canvas used for live-rendering.
              </p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <p>
            <em>Get in touch!</em>
          </p>
          <a className="contact" href="#contact">
            Contact Info
          </a>

          <div className="links">
            <a
              href="https://github.com/dgcohen"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/diegocohen1"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div id="contact-modal">
            <button className="close" aria-label="close">
              X
            </button>
            <div className="text">
              <div className="email">
                <span>email:</span>
                <a href="mailto:diego.cohen3@gmail.com" target="_top">
                  diego.cohen3@gmail.com
                </a>
              </div>
              <div className="phone">
                <span>phone:</span>
                <a href="tel:1-201-921-2645">(201) 921 - 2645</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
