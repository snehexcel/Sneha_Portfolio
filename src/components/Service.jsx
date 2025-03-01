import React from 'react'
const services = [
  {
    "id": 1,
    title: "Data Structures and Algorithm",
    description: "Understanding the logic behind data organization and algorithmic thinking to solve real-world problems efficiently.",
  },
  {
    "id": 2,
    title: "Frontend Development",
    description: "Designing intuitive and responsive user interfaces that enhance user experience.",
  },
  {
    "id": 3,
    title: "Backend Development",
    description: "Building scalable server-side logic and managing databases for seamless application performance.",
  },
  {
    "id": 4,
    title: "Full-stack Development",
    description: "Bridging frontend and backend to create complete, seamless, and efficient web applications.",
  },
  {
    "id": 5,
    title: "AWS",
    description: "Leveraging cloud computing to build scalable, secure, and high-performance applications.",
  },
  {
    "id": 6,
    title: "Machine Learning",
    description: "Exploring ML algorithms and model evaluation to develop data-driven solutions and real-world applications.",
  },
];
const Service = ()=> {
  return (
    <div className='bg-transparent text-white py-20' id='service'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-5xl font-bold text-centre mb-12'> My Services</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service) => (
            <div key={service.id} className='bg-gray-900 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
              <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500'>
                {service.id}
              </div>
              <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
                {service.title}
              </h3>
              <p className='mt-2 text-gray-300'>{service.description}</p>
            
            </div>
          ))}
        </div>
        </div>
        </div>
  )
}

export default Service