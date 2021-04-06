import React from 'react'

import "./ProjectStyle.css"


const ProjectCpn = () => {
    return (
<section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
    
        <div className="project-card">
          <img src="/proj1.jpg" alt="project" />
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      
        <div className="project-card">
          <img src="/proj2.jpg" alt="project" />
          <h3>Project 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
     
        <div className="project-card">
          <img src="/proj3.jpg" alt="project" />
          <h3>Project 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
     
        <div className="project-card">
          <img src="/proj4.jpg" alt="project" />
          <h3>Project 4</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p><a href="#">Github Link</a></p>
        </div>
      </div>
    </section>

  

    );
}

export default  ProjectCpn 
