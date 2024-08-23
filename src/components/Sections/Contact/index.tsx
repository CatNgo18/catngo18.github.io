'use client'

import { FormEvent, useRef, useState } from 'react';
import { Button, Input, Textarea } from '../../../app/MTailwind';
import { Github, Linkedin } from '@styled-icons/bootstrap';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef(null);
  const [emailStatus, setEmailStatus] = useState<'unsent' | 'loading' | 'sent' | 'error'>('unsent');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
      && process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      && process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      && form.current) {
        setEmailStatus('loading');

        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
            form.current,
            {
              publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
            }
          )
          .then(
            () => {
              setEmailStatus('sent');
            },
            () => {
              setEmailStatus('error');
            }
          )

        setEmailStatus('sent');
    } else {
      setEmailStatus('error');
    }
  }
  return (
    <div id='contact-section' className="pb-16 mt-16 bg-background-dark/50 w-full">
      <h2>Let&#39;s Talk!</h2>
      <form ref={form} onSubmit={sendEmail} className='w-2/3 max-w-2xl mx-auto flex flex-col gap-2 items-center mt-5'>
        <Input
          crossOrigin={""}
          label='Name'
          name='user_name'
          required
        />
        <Input
          crossOrigin={""}
          label='Email'
          name='user_email'
          required
        />
        <Textarea
          label='Message'
          name='message'
          required
        />
        {emailStatus === 'unsent' || emailStatus === 'error' ?
          <Button type='submit'>
            Send
          </Button>
        : emailStatus === 'loading' ?
          <Button loading={true}>
            Loading...
          </Button>
        : emailStatus === 'sent' ?
          <Button type='submit'>
            Sent!
          </Button>
        :
        ''
        }
        {emailStatus === 'error' &&
        <p>
          Could not send your message. Please try again later.
        </p>
        }
      </form>
      <div className="flex flex-row gap-10 mt-10 justify-center">
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