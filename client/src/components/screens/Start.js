import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Start.css';

function Start() {
  const [candidates, setCandidates] = useState([]); // Define candidates state

  useEffect(() => {
    // Fetch posts data from your backend API
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/allpost`) // Use the correct endpoint
      .then((response) => {
        setCandidates(response.data.posts); // Update state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching candidates:', error);
      });
  }, []);

  return (
    <>

      <section id="Home">
        <div className="Home container">
          <div>
            
          </div>
          <div>
            <h1>Vote, <span> </span></h1>
            <h1>For Your Favourite <span> </span></h1>
            <h1>Club <span> </span></h1>
            <a href="#about" type="button" className="team">Portfolio</a>
          </div>
        </div>
      </section><br></br><br></br>
      <section id="candidates" style={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <div className="candidates-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="candidates-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 className="section-title" style={{ fontSize: '5em', color: '#333' }}>
            Can<span style={{ color: '#e44d26' }}>didates</span>
          </h1>
        </div>
        <div className="all-candidates" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {candidates.map((candidate, index) => (
            <div
              className={`project-item ${index % 2 === 0 ? 'even' : 'odd'}`}
              key={candidate._id}
              style={{
                width: '20%',
                marginBottom: '100px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out',
                backgroundColor: index % 2 === 0 ? '#fff' : '#f9f9f9',
                ':hover': { transform: 'scale(1.05)' },
              }}
            >
              <div className="project-info" style={{ padding: '20px' }}>
                <h1 style={{ fontSize: '1.5em', color: '#333' }}>{candidate.title}</h1>
                {/* Add other information as needed */}
              </div>
              <div className="project-img">
                <img
                  src={candidate.photo}
                  alt={candidate.title}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      <section id="services">
        <div className="services container">
          <div className="service-top">
            <h1 className="section-title">Re<span>su</span>lts</h1>
            <p> </p>
          </div>
          <div className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" alt="" /></div>
            <h2 style={{textAlign: "center"}}>Results </h2>
            <p style={{textAlign: "center"}}> Still Not Posted.....</p>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img">
              <img src="https://previews.123rf.com/images/kasya2k/kasya2k2202/kasya2k220200021/182264988-business-startup-flat-line-icon-launch-project-strategy-development-plan-outline-sign-for-mobile.jpg" alt="" />
            </div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About <span>Me</span></h1><br></br><br></br><br></br>
            <h2>
Chenchugari Jayadeep</h2>
<h1>
Login as Admin to see the full Website.
</h1>
<h3>
Username: jayadeepc@gmail.com

</h3>
<h3>
Password: jayadeep
</h3>

<h1>
  To Vote please Register.
</h1>
            
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact container">
          <h1 className="section-title">Contact <span>info</span></h1>
          <div className="contact-items">
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="phone icon" /></div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+91 8919019663</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="email icon" /></div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>jayadeepchenchugari@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="address icon" /></div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>Nandyal,India</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="footer container">
          <div className="brand">
            <h1><span>Jayadeep-</span>Chenchugari</h1>
          </div>
          <div className="social-icon">
            <div className="social-item">
              <a href="https://github.com/JayadeepChenchugari"><img src="https://img.icons8.com/bubbles/100/000000/github.png" alt="" /></a>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" alt="Instagram icon" /></a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/jayadeep-chenchugari/"><img src="https://img.icons8.com/bubbles/100/000000/linkedin.png" alt="LinkedIn icon" /></a>
            </div>
          </div>
          <p>Copyright © JayadeepChenchugari. All rights reserved</p>
        </div>
      </section>
    </>
  );
}

export default Start;
