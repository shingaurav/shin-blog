import React from 'react'
import {Link} from 'react-router-dom'

function Contact() {
    return (
        <div>
            <div className="container">
                {/* <header className="header">
                    <a href="/">Minimalistic Website</a>
                </header> */}
                <nav className="menu">
                    {/* <a href="">Home</a> &nbsp; &nbsp; &nbsp;
                    <a href="about.html">About Us</a>&nbsp; &nbsp; &nbsp;
                    <a href="contact.html">Contact</a>&nbsp; &nbsp; &nbsp; */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <aside>
                    <h1>Side Bar</h1>
                </aside>
                <article className="main">
                    <h1 className="page-heading">Contact</h1>
                    <div id="form">
                        <form action="https://formspree.io/shingaurav6662@gmail.com"
                        method="POST">
                            <p>
                                <label>Name:</label>
                                <input type="text" name="name" placeholder="your name" required />
                            </p>
                            <p>
                                <label>Email:</label>
                                <input type="text" name="email" required /> 
                            </p>
                            
                            <p>
                                <label>Subject:</label>
                                <input type="text" name="subject" required />
                            </p>
                            
                            <p>
                                <label>Message:</label>
                                <textarea id="message" name="message" id="" cols="30" rows="10" ></textarea>
                            </p>
                            <p>
                                <input id="submit" type="submit" name="submit" value="send" />
                            </p>

                            
                            
                        </form>


                    </div>
                </article>
    <footer>
        &copy; 2030 Minimal Website &nbsp; Design by Gaurav Singh <a
        href="http://www.edwindiaz.com">Gaurav Singh</a>
    </footer>
   
</div>   
        </div>
    )
}

export default Contact