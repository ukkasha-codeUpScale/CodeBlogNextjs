import React from "react";
import { useRouter } from "next/router";



export default function BlogNo({ data }: any) {
  console.log('pushing from new working branch');
  console.log(data , 'ccccccccccccccccccccccccccc');
  console.log('====================================');
  // const router = useRouter();
  // const {blogNo} = router.query;

  return (
    <>
    <img className="w-full" src={data?.blog?.photo_url} />
      <h3>This is blog: {data?.blog?.title}</h3>
      <p className="text-gray-700 text-base">{data?.blog?.content_text} </p>
    </>
   
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(
//     `https://api.slingacademy.com/v1/sample-data/blog-posts`
//   );
//   const allposts = await res.json();

//   const paths = allposts.blogs.map((curItm: any) => ({
//     params: { blogNo: curItm.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps(context : any) {

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${context.query.blogNo}`
  );
  const data = await res.json();
console.log(data , 'serversideData===ccc')
  return {
    props: {
      data,
    },
  };
}
