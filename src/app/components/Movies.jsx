'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Movies = ({dt}) => {
    const router = useRouter();

    console.log(dt.backdrop_path);
  return (
    <div onClick={() => router.push(`/movie/${dt?.id}`)} className='min-w-[400px] relative'>
      <Image style={{objectFit: 'cover'}} width={400} height={400} src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path}`} />
      <div className=' card absolute bottom-0 p-2 text-white w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-all cursor-pointer'>
        <h1 className=' text-2xl font-bold w-[300px]'>{dt?.title}</h1>
        <h1 className=''> <span className='font-bold text-orange-500 text-2xl'>{dt?.vote_average}</span> - {dt?.release_date}</h1>
      </div>
      
    </div>
  )
}

export default Movies