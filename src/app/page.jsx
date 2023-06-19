import React from "react";
import Movies from "./components/Movies";

const Page = async ({searchParams}) => {
  
  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "movie/popular"}?api_key=c33ae3610cda673a7f2676743ddf4df9`) 
  const data = await res.json();
  // console.log(data.results[1].title);

  // console.log(searchParams.genre, 'Search Params Burası');
  return (
    <div className="flex items-center justify-center flex-wrap gap-3 ">
    {
      data?.results?.map((dt, i) => (
        <Movies key={i} dt={dt}/>
      ))
    }
    </div>
  );
};

export default Page;
