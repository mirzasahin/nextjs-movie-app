'use client'
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')

    const tabs = [
        {
            name: "En Popüler",
            url: "popular"
        },
        {
            name: "Top 10",
            url: "top_rated"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]
  return (
    <div className='p-5 my-3 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
    {
        tabs.map((tab, index) => (
            <Link className={`hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-600" : " "}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
        ))
    }

    </div>
  )
}

export default Tabs