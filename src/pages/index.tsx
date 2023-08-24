import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSec from "@/Components/hero";
import Link from "next/link";
import PostsGrid from "@/Components/postsgrid";

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/photos

const inter = Inter({ subsets: ["latin"] });

export default function Home({articles}:any) {

  return (
    <div className="">
    <HeroSec/>    
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-900" />
    <PostsGrid  data={articles} />
    </div>
  );
}


export async function getServerSideProps() {
  const res = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=2b773f2dddd14efa989edccafbfc6da3`)
  const articles = await res.json() 
  return { props: { articles } }
} 



