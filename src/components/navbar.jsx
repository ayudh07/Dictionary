import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logo.svg'
import ToggleSwitch from './toggleswitch';
import {useState, useEffect} from 'react';
import ThemeIcon from '../assets/images/icon-moon.svg'
function BasicExample() {
  const [fontFamily, setFontFamily] = useState('Mono');
  const [darkTheme, setDarkTheme] = useState(false);
  

  const fonts = {
      "Sans Serif": '"Inter", sans-serif',
      "Serif": '"Lora", serif',
      "Mono": '"Inconsolata", monospace'
  }
  
  function handleFont(selection){
    setFontFamily(selection);
  }
  
  function changeTheme(value){
      if(value){
        setDarkTheme(true);
      }
      else{
        setDarkTheme(false);
      }
  }
    
  useEffect(() => {
    document.getElementById('main').style.fontFamily = fonts[fontFamily];
    if(darkTheme){
      let root = document.getElementById('root');
      root.classList.remove('light-theme');
      root.classList.add('dark-theme');
    }
    else{
      let root = document.getElementById('root');
      root.classList.remove('dark-theme');
      root.classList.add('light-theme');
    }
  });

  return (
    <Navbar expand="lg" >
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
          <Nav className='d-flex gap-3 align-items-center'>
            <NavDropdown title={fontFamily} id="basic-nav-dropdown" className='text-capitalize'>
              <NavDropdown.Item href="#action/3.1" onClick={() => handleFont("Mono")}>Mono</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" onClick={() => handleFont("Serif")}>Serif</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" onClick={() => handleFont("Sans Serif")}>Sans Serif</NavDropdown.Item>
            </NavDropdown>
            <ToggleSwitch valueCallback={changeTheme}/>
            <div className='theme-icon d-flex align-items-center'>
              <img src={ThemeIcon} alt="theme icon" />
            </div>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;