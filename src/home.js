import React from 'react'
import { Link } from "react-router-dom";
import './style.css'

function Home(){
    return (
        <div className="App">
        <div className="container"> 
            {/* <header className="header">
                <a className ="link-title" href="/">Minimalistic Website</a>
            </header> */}
            <nav className="menu">
                {/* <a href="/index.html">Home</a> &nbsp; &nbsp; &nbsp;
                <a href="/about.js">About Us</a>&nbsp; &nbsp; &nbsp;
                <a href="contact.html">Contact</a>&nbsp; &nbsp; &nbsp; */}
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <aside>
                <h1>Shin Gaurav</h1>
            </aside>
            <div className="main">
                {/* <!-- <img src="http://placehold.it/600x300" alt=""> --> */}
                <div id="home-image">
                    <img src="http://placehold.it/200px100" alt="home image" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Quis voluptates molestiae iste maiores consectetur doloribus dignissimos,
                     rem, repellat et esse assumenda. Repudiandae magnam saepe recusandae accusamus
                      natus necessitatibus adipisci minima.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, autem officiis praesentium 
                    eveniet aut necessitatibus dolorum cupiditate, facere ipsam sequi consequatur. Architecto porro,
                     tempore nisi dolor dolorum quae facilis expedita?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quibusdam facere dignissimos incidunt modi voluptatibus consectetur natus sed expedita ipsa nihil, 
                    delectus dolores, tenetur nam sunt? Velit eligendi odit quidem illum.</p>
            </div>
            <footer>
                &copy; 2030 Minimal Website &nbsp;<span className ="separtor">|</span> Design by <a
                href="http://www.edwindiaz.com">Gaurav Singh</a>
            </footer>
           
        </div>    
            </div>
    )
}

export default Home