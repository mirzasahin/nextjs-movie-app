import Movies from '@/app/components/Movies';
import React from 'react'

const Page = async ({params}) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c33ae3610cda673a7f2676743ddf4df9&query=${keyword}`)
    const data = await res.json();


  return (
    <div>
        {
            !data?.results ? 
                <div>Aranılan şey bulunamadı.</div> :
                <div className='flex items-center flex-wrap gap-3'>
                {
                        data?.results?.map((dt, i) => (
                            <Movies key={i} dt={dt}/>
                        ))
                    }
                </div> 
                
            
        }
    </div>
  )
}

export default Page