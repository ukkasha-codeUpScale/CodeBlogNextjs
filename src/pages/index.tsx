import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSec from "@/Components/hero";
import Link from "next/link";
import PostsGrid from "@/pages/postsgrid";

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/photos

const inter = Inter({ subsets: ["latin"] });

export default function Home({ articles }: any) {
  return (
    <div className="block">
      <HeroSec />
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-900" />
      <PostsGrid data={articles} />
      <hr className="w-40 h-1 mx-auto my-4 bg-gray-500 border-0 rounded md:my-10 dark:bg-gray-900" />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts`
  );

  const articles = await res.json();
  return { props: { articles } };
}
