import React, { useState, useEffect } from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import { TextField, Button, Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact" className='contact-container' data-aos="slide-up" data-aos-duration="2000">  
      <Accordion style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", maxWidth: "500px", margin: "10px auto", borderRadius: "10px" }}>
        <AccordionSummary
          expandIcon={<BsArrowDownCircle />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ width: "100%" }}
        >
          <Typography style={{fontFamily: "'PT Serif', serif", fontSize: "1.2rem"}}>Contact Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <section id="contact" className="relative">
            <div className="form-container">
              <div className="contact-info">
                <h2 className="email-heading">
                  EMAIL
                </h2>
                <a href="mailto:taylorvtillman@gmail.com" className="email">
                  taylorvtillman@gmail.com
                </a>
              </div>
              <form
                netlify="true"
                name="contact"
                onSubmit={handleSubmit}>
                <h2>
                  Hire Me
                </h2>
                <p className='hire-me'>
                  Lets make something!
                </p>
                <TextField value={name} variant='outlined'
                  label="name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField value={email} variant='outlined'
                  label="email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField value={message} multiline fullWidth
                  rows={3}
                  label="Message"
                  id="message"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" style={{margin: "10px", background: "#393E46"}} fullWidth
                  type="submit">
                  Submit
                </Button>
              </form>
            </div>
          </section>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Contact;