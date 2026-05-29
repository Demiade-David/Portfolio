import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";

const texts = [
  "I am a front-end developer",
  "I am a back-end developer",
  "I am a software manager",
];

function App() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setVisible(false);
      timeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="h">
      <div className="App">
        <h1 style={{ marginTop: "4%" }}>
          Hi, I'm Oluwademilade David, a 13 year old developer
        </h1>
        <p>
          I build web apps and code projects from scratch using a large number
          of softwares like Javascript, HTML, CSS, Python, and others.
        </p>
      </div>
      <div className="Projects">
        <h1 style={{ marginLeft: "4%" }}>Some of the things I've built are</h1>
        <p style={{ marginLeft: "6%" }}>
          A full website for an accounting firm called Tzaddy Consulting.
          <br />
          I made the website from scratch using React, CSS, and HTML.
          <br />
          The website is fully responsive and user-friendly. The link for the
          website is down below just click on the button.
        </p>
        <button
          style={{
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginTop: "1px",
            cursor: "-moz-grab",
            marginLeft: "25%",
          }}
        >
          <a
            href="https://tzaddyconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Visit Website
          </a>
        </button>
      </div>
      <div className="Skills">
        <h1 style={{ marginLeft: "4%" }}>My Developer Toolkit</h1>
        <li style={{ marginLeft: "6%", listStyleType: "none" }}>
          <ul style={{ listStyleType: "revert" }}>
            <strong>Frontend Magic</strong>: HTML, CSS (especially layouts like
            Flexbox and positioning), and modern JavaScript.
          </ul>
          <ul style={{ listStyleType: "revert" }}>
            <strong>Frameworks & Libraries</strong>: React, for building
            modular, interactive, and fast user interfaces.
          </ul>
          <ul style={{ listStyleType: "revert" }}>
            <strong>Backend Sorcery</strong>: Node.js and Express, for crafting
            robust server-side applications and APIs.
          </ul>

          <ul style={{ listStyleType: "revert" }}>
            <strong> Tools I Live In</strong>: VS Code, Git, and GitHub for
            tracking my code.
          </ul>
        </li>
      </div>
      <div className="Contact">
        <h1 style={{ marginLeft: "4%" }}>Let's Connect!</h1>
        <p style={{ marginLeft: "6%" }}>
          I'm always open to new opportunities, collaborations, or just a chat
          about all things tech. Whether you're a fellow developer, a potential
          employer, or someone who shares my passion for coding, I'd love to
          hear from you!
        </p>
        <p style={{ marginLeft: "6%" }}>You Can Contact Me Through:</p>
        <button
          style={{
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginTop: "1px",
            cursor: "-moz-grab",
            marginLeft: "25%",
          }}
        >
          <a
            href="https://wa.me/09038483660"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}
          >
            Main Whatsapp
          </a>
        </button>
        <p style= {{marginLeft: "6%"}}>
            OR You can also try this Whatsapp number if the first did not go through:
          </p>
          <button
          style={{
            backgroundColor: "blue",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            marginTop: "1px",
            cursor: "-moz-grab",
            marginLeft: "25%",}}>

            <a href="https://wa.me/08063298416"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "white" }}>Other Whatsapp</a>
          </button>
        <p style={{ marginLeft: "6%" }}>
          OR call me directly using my number: 09038483660 or 08063298416
        </p>
      </div>
    </div>
  );
}

export default App;

{
  /* <p
          className="homepage__text"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.4s ease-in-out",
            fontSize: "40px",
            color: "white",
          }}
        >
          {texts[index]}
        </p> */
}
