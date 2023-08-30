// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

// export  async function getSinglePost(id:number){
//   const res = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`)
//   const singlePost = await res.json() 
//   return { props: { singlePost } }
// }
