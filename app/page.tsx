'use client'

import CityPicker from "@/components/CityPicker"
import { Card, Divider, Subtitle, Text } from "@tremor/react"
import { useState, useEffect, useRef  } from "react"

export default function Home() {

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxes = container.querySelectorAll('.blurItem');
    const maxWidth = window.innerWidth - 50;
    const maxHeight = window.innerHeight - 50;

    function moveElement(element) {
      const x = Math.random() * (maxWidth - element.offsetWidth);
      const y = Math.random() * (maxHeight - element.offsetHeight);
      element.style.transition = 'transform 2s ease-in-out';
      element.style.transform = `translate(${x}px, ${y}px)`;
    }

    function animate() {
      boxes.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const x = Math.random() * (maxWidth - rect.width) - rect.left;
        const y = Math.random() * (maxHeight - rect.height) - rect.top;
        element.style.transition = 'transform 2s ease-in-out';
        element.style.transform = `translate(${x}px, ${y}px)`;
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      boxes.forEach((element) => {
        element.style.transition = '';
      });
    }
  }, []);
  
  
  
  
  return (
    <main ref={containerRef} className="flex flex-col items-center justify-center min-h-screen bg-[#0E100F] relative container overflow-hidden">
      <div className="blurItem bg-yellow-400 blur-3xl w-56 h-56 rounded-full absolute top-0 left-0"></div>
      <div className="blurItem bg-blue-400 blur-3xl w-60 h-60 rounded-full absolute right-0 top-14"></div>
      <div className="blurItem bg-purple-400 blur-3xl w-56 h-60 rounded-full absolute bottom-0 left-28"></div>
      
      <div className="max-w-[800px] w-11/12 mx-auto p-20 rounded-3xl backdrop-blur-xl bg-black/60 border-none z-10 shadow-md">
        <Text className="text-6xl font-bold text-center mb-5 text-white">Weather AI</Text>
        <Subtitle className="text-xl text-center text-slate-300">Powered by Next.js 13.3, Tailwind Css, Tremor 2.0 & more!</Subtitle>

        <Divider className="my-10" />

        <div className="bg-[#0E100F] rounded-2xl py-7 px-7">
          <CityPicker />
        </div>
    </div>
    </main>
  )
}
