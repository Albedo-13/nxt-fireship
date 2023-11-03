"use client";

export default function Post({ params }: { params: { post: string } }) {
  console.log(params);
  return (
    <div>Post: {params.post}</div>
  )
}
