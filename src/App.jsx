import React from "react";
import "./App.css";


export default function Portfolio() {
return (
<div className="portfolio">
{/* Navbar */}
<nav className="navbar">
<h1 className="logo">Shreshta</h1>
<ul className="nav-links">
<li>Home</li>
<li>About</li>
<li>Projects</li>
<li>Contact</li>
</ul>
</nav>


{/* Hero */}
<section className="hero">
<h2>
Hi, I'm <span>Shreshta</span>
</h2>
<p>
An engineering student passionate about building clean and aesthetic
web experiences using React.
</p>
<button>View My Work</button>
</section>


{/* About */}
<section className="section">
<h3>About Me</h3>
<div className="card">
<p>
I enjoy web development, problem solving, and continuously learning
new technologies to improve my skills.
</p>
</div>
</section>


{/* Projects */}
<section className="section">
<h3>Projects</h3>
<div className="projects">
<div className="card">Project 1</div>
<div className="card">Project 2</div>
<div className="card">Project 3</div>
</div>
</section>


{/* Contact */}
<section className="section">
<h3>Contact</h3>
<div className="card">
<p>Email: yourmail@example.com</p>
</div>
</section>


<footer>© 2026 Shreshta</footer>
</div>
);
}

  