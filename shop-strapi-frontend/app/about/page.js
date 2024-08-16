import React from 'react'

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Rohit Doriya</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={"/profile.jpg"} alt="Rohit Doriya - Profile Picture" style={{ width: "200px", height: "200px", borderRadius: "50%" }}/>
            </div>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">B.Tech in AI & Data Science at IIT Jodhpur, I am passionate about applying AI to solve humanity&aposs greatest challenges, such as renewable energy and climate change. I am also fascinated by the intersection of AI and Neuroscience, and I have a minor degree in this field. 

I have gained practical experience as a Machine Learning Engineer at Tangli, where I worked on developing and deploying AI models for various domains, such as e-commerce, health, and education. I have also acquired multiple certifications from Google and IBM, demonstrating my proficiency in data analysis, deep learning, and quantum computing. My skills include exploratory data analysis, statistical analysis, and regression models. 

My goal is to become a Machine Learning Engineer/Researcher, utilizing AI to push the boundaries of innovation. I am also interested in pursuing higher studies, and expanding my expertise in AI. I am determined to make a lasting impact in this field by combining academic rigor with real-world application.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default About