import React,{ useRef } from 'react'
import "./Project.css"
import Slider from 'react-slick'
import { Project_Experience } from '../../utils/data';
import ProjectCard from './ProjectCard/ProjectCard';
const Project = () => {

    const sliderRef=useRef();
    
        const settings={
            dots: false,
            infinite:true,
            speed:500,
            slidesToShow:2,
            slidesToScroll:1,
            arrows:false,
            responsive:[
                {
                    breakpoint:769,
                    settings:{
                        slidesToShow:1,
                        slidesToScroll:1,

                    },
                },
            ],
        };
        const slideRight=()=>
{
    sliderRef.current.slickNext();
};
const slideLeft=()=>
{
    sliderRef.current.slickPrev();
};
  return (
    <section id="Project" className="project-container">
    <h5>Projects</h5>
    <div className="project-content">

    <div className="project-content">
        <div className="arrow-right" onClick={slideRight}>
            <span className="material-symbols-outlined">
                chevron_right
            </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
            <span className="material-symbols-outlined">
                chevron_left
            </span>
        </div>
    </div>

        <Slider ref={sliderRef}{...settings}>
    {Project_Experience.map((item)=>(
        <ProjectCard key={item.title} details={item}/>
    ))}
    </Slider>
    </div>
   </section>
  )
}

export default Project