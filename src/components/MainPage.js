import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "../img/logo.svg";

class MainPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentId: 0,
            currentTab: 0,
            tabContainerHeight: 70,
            navBarClass: "et-hero-tabs-container"
        }
        this.scrollToTop();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        console.log(`window.pageYOffset ${window.pageYOffset}`)
        console.log(`window.innerHeight ${window.innerHeight}`)
        this.setState({
            navBarClass: Math.ceil(window.pageYOffset) + this.state.tabContainerHeight >= window.innerHeight ?
                "et-hero-tabs-container--top" : "et-hero-tabs-container"
        });
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (<div className="tabs-root">
            <section className="et-hero-tabs">
                <h1 className="white-text">AHMED ANWAR</h1>
                <h3 className="white-text">Software Engineer</h3>
                <div class="bg-image">
                </div>
                <div className={`${this.state.navBarClass}`}>
                    <Link className="et-hero-tab"
                        to="tab-about"
                        spy={true}
                        smooth={true}
                        duration={500}>About Me</Link>
                    <Link className="et-hero-tab"
                        to="tab-work"
                        spy={true}
                        smooth={true}
                        duration={500}>Work Experience</Link>
                    <img src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop} />
                    <Link className="et-hero-tab"
                        to="tab-projects"
                        spy={true}
                        smooth={true}
                        duration={500}>Some Projects</Link>
                    <Link className="et-hero-tab"
                        to="tab-contact"
                                    spy={true}
                        smooth={true}
                        duration={500}>Get in touch!</Link>
                    <span className="et-hero-tab-slider">
                    </span>
                </div>
            </section>

            <main className="et-main">
                <section className="et-slide"
                    id="tab-about">
                    <h1>HELLO!</h1>
                    <h3>I am a Software Engineer based in Cairo, Egypt.</h3>
                </section>
                <section className="et-slide"
                    id="tab-work">
                    <h1>MY WORK EXPERIENCE</h1>
                    <h3>Staff Software Engineer at<span>&nbsp;</span>
                        <a href="https://www.sumerge.com"
                            rel="noreferrer"
                            target="_blank">Sumerge</a>
                    </h3>
                </section>
                <section className="et-slide"
                    id="tab-projects">
                    <h1>SOME PROJECTS I WORKED ON</h1>
                    <h3>
                        Will add them here soon, for now please check my CV or
                    <span>&nbsp;</span>
                        <a href="https://www.linkedin.com/in/AhmedAnwarM" rel="noreferrer"
                            target="_blank">LinkedIn</a>
                        <span>&nbsp;</span> profile
                    </h3>
                </section>
                <section className="et-slide"
                    id="tab-contact">
                    <h1>GET IN TOUCH</h1>
                    <h3>
                        I am not currently looking to change positions, but
                        if you would like to contact me
                        for any reason please do so by all means and I will get back to you as soon as I can!
               </h3>
                    <h3>
                        You can also<span>&nbsp;</span>
                        <a class="email-link"
                            href="https://drive.google.com/file/d/1ozaZZiX0fCpbobl-vSM-B3wL5l__Ng46/view?usp=sharing"
                            rel="noopener noreferrer"
                            target="_blank">Get a copy of my CV here</a>
                    </h3>
                    <a class="email-link"
                        href="mailto:ahmedanwarm@outlook.com"
                        rel="noopener noreferrer"
                        target="_blank">Email</a>
                    <a class="email-link"
                        href="https://api.whatsapp.com/send?phone=201009149603"
                        rel="noopener noreferrer"
                        target="_blank">WhatsApp</a>
                </section>
            </main>
        </div>
        );
    }
}

export default MainPage;
