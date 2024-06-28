import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import "./navbar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <span>Taiseer</span><span className="dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/skills" className="nav-link">Skills</NavLink>
            <NavLink to="/projects" className="nav-link">Projects</NavLink>
          </Nav>
          <div className="navbar-text">
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/taiseer-salah-9b0a3221a/"><FaLinkedinIn className="icon" /></a>
              <a href="/"><FaFacebook className="icon" /></a>
              <a href="https://github.com/taiseerrashed"><FaGithub className="icon" /></a>
            </div>
            <button><NavLink to="/contact" className="connect-btn">Let's Connect</NavLink></button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
