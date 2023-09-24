import React from 'react'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <section className='text-primary-color'>
      <div className='md: grid md:grid-cols-2 gap-8 items-centerpy-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/green-me.png" alt="wanna get to know me?" width={500} height={500}/>
        <div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-400 to-green-300">About Me</h2>
          <p className='text-base md:text-lg'>When I&apos;m not coding, you can find me cooking, playing the piano, or playing the guitar.
          <br />
          I am proficient in TypeScript, JavaScript ES6+, React.js, Node.js, Redux, Express.js, SQL, HTML5, SCSS, CSS, NoSQL (MongoDB), Mongoose, React Testing Library, Jest, Supertest,
          Webpack, bcrypt, Kubernetes, Docker, RESTful APIs, and Github</p>


        </div>
      </div>
    </section>
  )
}

export default AboutMe