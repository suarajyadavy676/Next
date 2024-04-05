'use client'
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [movie,setMovie] = useState([])
  console.log("process",process.env.NODE_ENV==="development"?"dev":"production")
  let baseUrl = (process.env.NODE_ENV ==="development"?'http://localhost:3000/api':'https://my-app-ten-xi-55.vercel.app/api')
  
  async function fetchApi (){
    let res = await axios.get(`${baseUrl}/movies`)
    setMovie(res.data)
    // console.log(res.data)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello Next js</h1>
      <div className="grid grid-cols-3 gap-10 justify-between">
      {movie.map(ele=><Card {...ele} key={ele.id}/>)}
      </div>
      <about />
    </main>
  );
}
