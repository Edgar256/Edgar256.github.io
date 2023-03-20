import React from 'react';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';
import Typewriter from 'typewriter-effect';
import Edgar from './images/edgar-photo.jpg';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <div className="container position-relative vh-100">
        <div className="d-flex justify-content-center pt-3">
          <nav className="nav text-white">
            <a className="nav-link text-white" href="#">
              Home
            </a>
            <a className="nav-link text-white" href="#">
              About
            </a>
            <a className="nav-link text-white" href="#">
              Technologies
            </a>
            <a className="nav-link text-white" href="#">
              Portfolio
            </a>
            <a className="nav-link text-white" href="#">
              Skills & CV
            </a>
            <a className="nav-link text-white" href="#">
              Contact
            </a>
          </nav>
        </div>
        <div className="w-100 h-100 d-flex justify-content-center align-items-center p-0">
          <div className="d-flex w-100">
            <img
              src={Edgar}
              alt="Edgar profile"
              className="rounded-circle mx-auto py-1 px-2"
              width={200}
              height={200}
            />
            <div className="w-100 px-2 py-0">
              <div className="text-white display-1">
                Hi, I'm Edgar Tinkamanyire,
              </div>
              <div className="text-white display-4">
                <Typewriter
                  options={{
                    strings: [
                      'a FullStack Software Engineer with experience in both FrontEnd and BackEnd Development',
                      'I build Web and Mobile Apps',
                      'When I am not consuming RestFul APIs, you will find me taking Coffee',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative vh-100">
        <div className="w-100 h-100 d-flex justify-content-center align-items-center p-0">
          <div>
            <div className="text-white display-4 py-3 text-center">About</div>
            <div className="text-white text-center">
              I'm a FrontEnd Developer at Mobile Paradigm Group (MPG) a Tech
              Company in Uganda(East-Africa). I have a big passion for UI
              effects, dynamic user experience, website and mobile-app
              development. Over the years , I have played a key role in
              converting ideas from ink to robust scalable web and mobile apps,
              following the best engineering principles. My experience has
              taught me that every problem requires a unique solution. This has
              been the key to my success and the teams I have worked with. Have
              an idea you want to convert into a WebApp or Mobile App ? Get in
              Touch
            </div>
          </div>
        </div>
      </div>
      <div className="container position-relative vh-100">
        <div className="w-100 h-100 d-flex justify-content-center_ align-items-center p-0">
          <div className='w-100'>
            <div className="text-white display-4 py-3 text-center py-5 w-100">
              Technologies
            </div>
            <div className="text-white py-3">
              <h4>PROTOTYPING AND WIREFRAMING</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PEN & PAPER
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  FIGMA
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  INVISION
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  ADOBE XD
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HOTGLOO
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>FRONTEND</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HTML
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  CSS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  VANILLA JS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REACT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  TYPESCRIPT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  APOLLO CLIENT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  NEXT JS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  VUE
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>BACKEND</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  NODEJS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  EXPRESS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PHP
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  LARAVEL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  PYTHON
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DJANGO
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  RESTFUL APIS
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>MOBILE APPS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REACT NATIVE
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  IONIC
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  FLUTTER
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>CMS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  WORDPRESS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  SHOPIFY
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DRUPAL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  JOOMLA
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DATABASES</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  MONGODB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  REDIS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  MYSQL
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  POSTGRES
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>VERSION CONTROL</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GIT
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GITHUB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  GITLAB
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  BITBUCKET
                </button>
              </div>
            </div>
            <div className="text-white py-3">
              <h4>DEV-OPS</h4>
              <div className="d-flex flex-wrap">
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  AWS
                </button>                
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  HEROKU
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DOCKERS
                </button>
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  LINODE
                </button>    
                <button className="btn btn-outline-secondary text-white rounded-pill m-1">
                  DIGITAL OCEAN
                </button>           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
