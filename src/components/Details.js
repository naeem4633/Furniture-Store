import React from 'react'
import { Link } from 'react-router-dom';

const Details = () => {
  return (
    <>
        <div className='w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0'></div>
        <div className='w-3/4 mx-auto flex flex-col justify-between py-24'>
            <div className='grid grid-cols-2 gap-4 justify-between w-full mx-auto'>
                <div className='w-fit border borer-gray-300 mr-8'>
                    <img src='../images/detail-image-big.jpg'></img>
                </div>
                <div className='w-fit ml-8 mt-16'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <p className='text-3xl'>Woodson Single Bed in Brown Color</p>
                            <p className='text-2xl'>USD 65665</p>
                            <p className='text-xl'>Design: Woodson</p>
                            <p>SKU: FG020002668</p>
                            <p>Size:Single</p>
                            <p>Delivered in : 04 - 06 Working Days</p>
                        </div>
                        <div className='flex flex-col border-gray-200 my-6'>
                            <div className='flex flex-row'>
                                <button className='w-12 h-12 bg-green-500'>
                                    <img className='w-6 m-3' src='../images/minus.png'></img>
                                </button>
                                <p className='border border-green-500 w-24 h-12 mx-2 px-11 pt-2.5 text-lg'>1</p>
                                <button className='w-12 h-12 bg-green-500'>
                                    <img className='w-6 m-3' src='../images/plus.png'></img>
                                </button>
                                <button className='w-12 h-12 p-3 border border-gray-300 mx-2'>
                                    <img src='../images/heart.png'></img>
                                </button>
                            </div>
                        </div> 
                        <button className='w-52 h-12 bg-green-500'>
                            <p className='text-xl text-white'>Add To Cart</p>
                        </button>
                        <div className='border border-gray-200 my-4'></div>
                        <div className='flex flex-col border-gray-200'>
                            <ul>
                                <li><p className='text-xl'>Installment Plans Available</p></li>
                                <li><p className='text-red-500 underline'>Starting as low as USD 76</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col justify-between'>
            <p className='text-xl ml-16 mb-2'>PRODUCT DESCRIPTION</p><div className='border border-green-500 w-64 ml-16 '></div>
            <div className='w-full px-16 py-12 border border-gray-200 text-xl'>
                <p className='underline mb-6 font-medium'>Things to love about Woodson Bed</p>
                <p>Bring out the fun in your kids’ bedrooms with this Woodson single bed. Defined by its distinct trendy headboard design in solid Pine wood, this bed is also coated with a beautiful brown polish to give it a glossy finesse, along with the added advantage of being easy to maintain, making it a favorite for kids and parents alike.</p>
            </div>
        </div>
        <div className='w-3/4 mx-auto flex flex-col justify-between mt-24'>
            <p className='text-2xl'>Products similar to this item</p>
            <div className="grid grid-rows-1 grid-cols-3 gap-x-16 gap-y-8 my-8 ">
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
    </>
  )
}

export default Details
