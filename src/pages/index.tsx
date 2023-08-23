import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSec from "@/Components/hero";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
 {/* <HeroSec/> */}
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
              <Link
                href={'/'}
                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Learn more
              </Link>
            </div>
          </div>
       
      </section>
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-900" />

    </div>
  );
}
