import React from 'react';
import SocialLinks from '../components/SocialLinks';

function Home() {
  return (
    <div className="home-container">
      <img src="images/2.jpg" alt="Raden Mohamad Adrian" className="profile-photo" />
      <h1>Hello!</h1>
      <h2>My Name is Raden Mohamad Adrian</h2>
      <p>I am a 7th-semester Computer Science student at the University of Indonesia. I have a deep passion for Artificial Intelligence
and Data Science. I also have strong skills in front-end and back-end development, mobile development, and have dabbled in
cybersecurity.</p>

      <SocialLinks />
    </div>
  );
}

export default Home;
