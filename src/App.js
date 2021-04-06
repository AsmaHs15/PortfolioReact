import './App.css';

import NavBarCpt from './Components/Nav/NavBar';
import AboutMeCpn from './Components/About/AboutMe';
import ContactCpt from './Components/Contact/ContactMe';
import  FooterCpn from './Components/Footer/Footer';
import ProjectCpn from './Components/Projects/MyProjects'


function App() {
  return (
    <div className="App">
      <NavBarCpt/>
      <AboutMeCpn/>
      
      <ProjectCpn/>
      <ContactCpt/>
      <FooterCpn/>
   

    </div>
  );
}

export default App;