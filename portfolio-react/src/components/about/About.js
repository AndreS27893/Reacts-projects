import React from 'react'
import'./About.css';
import andresBonilla from"../../media/andresBonilla.jpg"
function About() {
  return (
    <div className='about-container'>
        <div className='about-desc'>
        <h3>Let me tell you something about me</h3>
        <p>Hi! How are you? I am a junior web programmer, enthusiastic, proactive and always wanting to improve. I always like to try new ways of programming to make it faster and more efficient. See you in the contacts part, see you later!</p>
    </div>
    <div className='about-img'>
        <img className='image' src={andresBonilla} alt="mi-imagen"/>
    </div>
    </div>
  )
}

export default About