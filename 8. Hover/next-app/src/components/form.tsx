import React from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Group } from './ui/group';

export const Form = () => {
  return (
    <form className="h-full w-full bg-gray-50 px-8 py-14">
      <h1 className="text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 text-center selection:bg-black selection:backdrop-blur-md selection:text-white">
        This is a{" "}
        <span
          className={
            "inline-block relative text-white z-10 after:content-[''] after:w-full after:h-full after:bg-blue-500 after:skew-5 after:-z-10 after:absolute after:inset-0"
          }
        >
          clean
        </span>{" "}
        design form.
      </h1>
      <div className="my-4 flex flex-col gap-8 max-w-sm mx-auto">
        <Group>
          <Label
            htmlFor="firstname"
            className=""
          >
            First Name
          </Label>
          <Input disabled type="text" id="firstname" name='firstname' placeholder="Enter your name" className='cursor-not-allowed' />
        
        </Group>
        <Group>
          <Label
            htmlFor="email"
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Email
          </Label>
          <Input type="email" id="email" name='email' placeholder="Enter your email" className='invalid:border-red-500' />
        </Group>
        
        <Group>
          <Label
            htmlFor="company"
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Company
          </Label>
          <Input type="text" id="company" name='company' placeholder="Enter your company name" />
        </Group>
        
        <Group>
          <Label
            htmlFor="message"
            className="after:content-['*'] after:ml-0.5 after:text-red-500"
          >
            Message
          </Label>
          <Input type="text" id="message" name='message' placeholder="Enter your message" />
        </Group>
        <button className="bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-neutral-800 transition-all duration-200 active:scale-98 hover:-translate-y-0.5 relative after:content-[''] after:h-[400px] after:w-1/2 after:bg-white/20 after:absolute overflow-hidden after:-left-20 after:-top-20 after:rotate-10 hover:after:h-[500px] after:transition-all after:duration-200 hover:after:backdrop-blur-[0.5px]">Send me your message</button>
      </div>
    </form>
  );
};
