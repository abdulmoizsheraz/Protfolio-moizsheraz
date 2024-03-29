import React,{useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
const Projects = () => {
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };
  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <>
        <ul className=' projectsoption flex justify-center items-center' data-aria-orientation='horizantal' >
          <li className='m-3 p-1 cursor-pointer' onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >Level 1😊</li>
          <li className='m-3 p-1 cursor-pointer ' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>Level 2😳</li>
          <li className='m-3 p-1 cursor-pointer' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>Level 3🤯</li>
        </ul>
    <section className='projects relative'>
      <div className="Project border  h-80 rounded-xl flex m-3" data-aos="fade-right" data-aos-duration="5000">
        <div className="Projectimg lg:mx-8 lg:mt-4">
          <Carousel width={300} height={200} showArrows={true} showThumbs={false} dynamicHeight={false}>
            <div>
              <img src="TalentTroveP1.png" className="rounded-xl lg:h-72 sm:h-23" alt="Project 1" />
            </div>
            <div>
              <img src="TalentTroveP2.png" className="rounded-xl lg:h-72 sm:h-23" alt="Project 2" />
            </div>
          </Carousel>
        </div>
        <div className="Projectdetails justify-around relative  mt-4">
          <h2 className="font-bold text-xl text-green-600 mb-2">TalentTrove-Job Search App</h2>
          <span className="des font-serif text-gray-300 ">
            <p className='paraw'> TalentTrove, a job search application built using Tailwind CSS and Next.js. It allows users to navigate through job search with its amazing search functionality and see the job description.</p>
          </span>
          <br />
          <span className="stack mt-12">
            <div className="border px-2 py-1 rounded-sm text-center  inline-block">Tech Stack</div>
            <ul className="flex flex-wrap m-2">
              <img src="https://camo.githubusercontent.com/ec8056bddf659d21de39b358d9786e56731cd767117e091348411666a5e7eee6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465" alt="" className="m-2" />
              <img src="https://camo.githubusercontent.com/ab4c3c731a174a63df861f7b118d6c8a6c52040a021a552628db877bd518fe84/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656163742d2532333230323332612e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d253233363144414642" className="m-2" alt="" />
              <img src="https://camo.githubusercontent.com/b7395b00d152dc8f19cec61f582369bd580e31b8ed93d34646ec43aa675baa7c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465" className="m-2" alt="" />
              <img src="https://camo.githubusercontent.com/22547aa007860433c23771dfd59d184297d9433adcf3082be8515a28a16cd875/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657263656c2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465" className="m-2" alt="" />
            </ul>
          </span>

          <div className="absolute right-3 ">
            <button className="p-2 border m-2 rounded-xl projectbtn">Docs</button>
            <button className="p-2 border m-2 rounded-xl projectbtn"><a href="https://talent-trove.vercel.app">Github</a></button>
            <button className="p-2 border m-2 rounded-xl projectbtn"><a href="https://talent-trove.vercel.app">Demo</a></button>
          </div>
        </div>
      </div>

   {isHovered && <div className='leveldes'>
<p>Easy Projects</p>
    </div>} 
   {isHovered1 && <div className='leveldes1'>
<p>Meduim level Projects</p>
    </div>} 
   {isHovered2 && <div className='leveldes2'>
<p>Difficult Projects Utilizing sockets</p>
    </div>} 
    </section>
            </>
  );
};

export default Projects;
