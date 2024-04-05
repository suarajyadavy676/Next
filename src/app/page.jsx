'use client'
import Card from "@/components/Card";
import axios from "axios";
import Image from "next/image";
import {data} from "./api/movies/route"
import { useEffect, useState } from "react";
export default function Home() {
  const [movie,setMovie] = useState([])
  // console.log("process",process.env)
  async function fetchApi (){
    let res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/movies`)
    setMovie(res.data)
    // console.log(res.data)
  }
  useEffect(()=>{
    fetchApi()
  },[])
  console.log(data)
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
