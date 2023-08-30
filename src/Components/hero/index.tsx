import React from "react";
import Link from "next/link";


export default function HeroSec(){
    return(
        <section className="relative w-full bg-my-img" >
     
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-32">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href={'/'}
              className=""
            >
              <button className="btn draw-border">Draw Border</button>
          
            </Link>
          </div>
        </div>
     
    </section>

    )
}



