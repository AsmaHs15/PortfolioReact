import React from 'react'

import "./AboutStyle.css"


const AboutMeCpn = () => {
    return (
        <section id='about-me'>
        <h1>
          Hello, my name is
          <span className='rotate text-important'>John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className='avatar' src="/John-Doe.jpg" alt="John-Doe"/>
      </section>

    );
}

export default  AboutMeCpn 
