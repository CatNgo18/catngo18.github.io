'use client'

import {Github, Linkedin} from '@styled-icons/bootstrap';

function Contact() {
  return (
    <div id='contact-section' className="mb-16">
      <div className="flex flex-row gap-10 justify-center mt-10">
        <Linkedin
          size={32}
          onClick={() => window.open("https://www.linkedin.com/in/cattien-ngo/")}
          className='cursor-pointer'
        />
        <Github
          size={32}
          onClick={() => window.open("https://github.com/CatNgo18")}
          className='cursor-pointer'
        />
      </div>
    </div>
  )
}
 
export default Contact