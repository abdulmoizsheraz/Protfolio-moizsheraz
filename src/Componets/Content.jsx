import React from 'react'
import Introduce from './Introduce';
import About from './About';
import Skills from './Skills';
import Protfolio from './Protfolio';
import Contact from './Contact';
import Footer from './Footer';
const Content = () => {
  return (
    <>
    <div className='content'>

      <Introduce />
        <About />
        <Skills />
        <Protfolio />
        <Contact/>
        <Footer/>
    </div>
    </>
  )
}

export default Content