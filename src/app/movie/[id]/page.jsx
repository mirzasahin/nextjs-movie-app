import Image from 'next/image';
import React from 'react'

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c33ae3610cda673a7f2676743ddf4df9`)
    return await res.json();
}

const Page = async({params}) => {
    const id = params.id;
    const movieDetail = await getMovie(id)

    console.log(movieDetail, 'Film detayı');
  return (
    <div className='relative p-7 min-h-screen'>
      <Image style={{objectFit: 'cover', opacity: 0.6}} fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path}`} />
      <div className='absolute'>
        <div className='text-4xl font-bold'>{movieDetail?.title}</div>
        <div className='w-1/2'>{movieDetail?.overview}</div>
        <div className='my-3'> <span className='font-bold text-orange-500 text-2xl'>{movieDetail?.vote_average.toString().slice(0, 3)}</span> - {movieDetail?.release_date}</div>
        <div className='border w-32 p-3 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black transition-all'>Trail</div>
      </div>
    </div>
  )
}

export default Page