'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { House } from "lucide-react";
import Navbar from "@/components/navbar";

const Page = () => {
  

  return(
    <div className="my-10">
      <section className="flex flex-col gap-5">
        <h1 className="text-3xl font-medium">Hi there! I’m Kevin. 👋</h1>
        <h2 className="text-xl">I’m a tech enthusiast and student based in <a href="https://id.wikipedia.org/wiki/Kota_Surakarta"><span className="text-red-600">Solo</span></a>, Indonesia.</h2>
        <div className="flex flex-col gap-3">
          <p>I specialize in building creative digital projects—from websites with <a href="https://nextjs.org/"><span className="text-blue-400">Next.js</span></a> and <span className="text-blue-700">Tailwind</span>, to <span className="text-green-400">IoT</span> systems using <span className="text-fuchsia-400">Raspberry Pi</span> and <span className="text-indigo-500">ESPressive</span>.</p>
          <p>I’m also the <span className="text-amber-600">Co-Founder</span> of <span className="text-red-600">SphereDev</span>, where I lead workshops to teach <span className="text-green-600">game development</span>, <span className="text-fuchsia-500">UI/UX</span>, and <span className="text-cyan-600">Android app</span> building to students across schools.</p>
          <p>I started <span className="text-green-500">tinkering</span> with <span className="text-red-500">code</span> and <span className="text-amber-500">electronics</span> when I was still figuring out how to spell “microcontroller.” It’s been a wild ride since, and I’m still obsessed with building things that work and look cool.</p>
          <p>Some of my projects include <span className="text-rose-400">payment systems</span> for dorms, <span className="text-blue-500">smart galon</span> lockers, and <span className="text-purple-600">educational games</span> on Roblox.</p>
          <p>You can find my work on <span className="text-purple-600">GitHub</span> or connect with me on <span className="text-blue-400">LinkedIn</span>. Always happy to chat via <span className="text-red-500">email</span> or anywhere devs hang out.</p>
        </div>
      </section>
    </div>
  )
}

export default Page