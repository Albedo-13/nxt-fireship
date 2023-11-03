"use client";

export default function Username({ params }: { params: { username: string } }) {
  console.log(params);
  return (
    <div>Username: {params.username}</div>
  )
}
