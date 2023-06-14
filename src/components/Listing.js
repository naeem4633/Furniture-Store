import React from 'react'
import { Link } from 'react-router-dom';

const Listing = () => {
  return (
    <>
    <div className='flex-flex-row justify-center'>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 border-t-1 border-l-0 border-r-0 border-b-0">
            <div className="mx-auto w-full max-w-screen px-24 py-6 lg:py-8 flex flex-row justify-center">
                <button className='flex flex-row justify-between mx-10'>
                    <img className='w-6 mx-3' src='../images/filter.png'></img>
                    <p>Filter By</p>
                </button>
                <button className='flex flex-row justify-between mx-10'>
                    <p>Sort</p>
                    <img className='w-6 mx-3' src='../images/down-arrow.png'></img>
                </button>
            </div>
        </div>

        <div className="w-3/4 bg-white dark:bg-gray-900 border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0 mx-auto">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 flex flex-row">
                <div className="grid grid-cols-3 gap-x-32 gap-y-8 my-8 ">
                    <Link className="w-[27rem] mx-auto">
                        <img className='w-full' src='../images/bed-1.jpg'></img>
                        <div className='flex flex-col justify-between my-6 h-14'>
                            <p className=''>///////////PRODUCT NAME\\\\\\\\\\\\\\</p>
                            <p className='font-bold'>ss</p>
                        </div>
                    </Link>
                    <div className="w-[27rem] mx-auto">
                        <img className='w-full' src='../images/bed-1.jpg'></img>
                        <div className='flex flex-col justify-between my-6 h-14'>
                            <p className=''>///////////PRODUCT NAME\\\\\\\\\\\\\\</p>
                            <p className='font-bold'>ss</p>
                        </div>
                    </div>
                    <div className="w-[27rem] mx-auto">
                        <img className='w-full' src='../images/bed-1.jpg'></img>
                        <div className='flex flex-col justify-between my-6 h-14'>
                            <p className=''>///////////PRODUCT NAME\\\\\\\\\\\\\\</p>
                            <p className='font-bold'>ss</p>
                        </div>
                    </div>
                    <div className="w-[27rem] mx-auto">
                        <img className='w-full' src='../images/bed-1.jpg'></img>
                        <div className='flex flex-col justify-between my-6 h-14'>
                            <p className=''>///////////PRODUCT NAME\\\\\\\\\\\\\\</p>
                            <p className='font-bold'>ss</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Listing
