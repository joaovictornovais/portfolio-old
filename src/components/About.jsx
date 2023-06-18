import React from 'react'

const About = () => {
  return (
    <section id="about" className='px-8 py-24 flex flex-col gap-6 max-w-[1000px] mx-auto'>
      <img className='rounded-xl w-[400px] mx-auto'
        src="https://wallpaperaccess.com/full/8077555.png" alt="ANIME GIRL PROGRAMMING" />
      <h3 className='text-blue-600 font-bold uppercase text-center pt-4 text-xl'>About Me</h3>
      <h2 className='text-3xl sm:text-4xl text-gray-800 font-bold text-center'>A dedicated Full-Stack Developer based in São Paulo, Brazil. 📍</h2>
      <div className='text-center text-lg text-zinc-600'>
        <p>As an intern Full-Stack Developer, I possess an impressive arsenal of front-end skills in HTML, CSS, JavaScript, React and TailwindCSS. As a back-end developer, I have a solid knowledge of Java, Python, PostgreSQL and Firebase.</p>
        <p>Isn't just my job, programming is also one of my favorites hobbies that a practice a lot everyday.</p>
        <p>I really like to learn and teach code stuffs to my discord friends.</p>
      </div>

    </section>

  )
}

export default About