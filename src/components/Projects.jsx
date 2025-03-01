import React from 'react';
import NoteSync from "../assets/notesync.png";
import MentalHealthCompanion from "../assets/mental-health-companion.png";

const projects = [
    {
        id: 1,
        name: "NoteSync",
        technologies: "React",
        image: NoteSync,  // Corrected variable name
        github: "https://note-sync-kus4g1end-snehexcels-projects.vercel.app/login",
    },
    {
        id: 2,
        name: "Mental-health-companion",
        technologies: "NextJS-14",
        image: MentalHealthCompanion,  // Corrected variable name
        github: "https://github.com/snehexcel/mental-health-companion-website",
    },
];

const Projects = () => {
  return (
    <div className='bg-transparent text-white py-20' id='projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-12'>My Projects</h2>  {/* Fixed typo */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
              <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
              <p className='text-gray-400 mb-4'>{project.technologies}</p>
              <a href={project.github} className='inline-block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Github</a>
            </div>
          ))}
        </div>
      </div> 
    </div>
  );
}

export default Projects;
