import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Listing = ( {furniture} ) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const delayTimeoutRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // if (sortBy === "low_to_high") {
    //     filteredProducts.sort((a, b) => a.price - b.price);
    //   } else if (sortBy === "high_to_low") {
    //     filteredProducts.sort((a, b) => b.price - a.price);
    //   }

    const handleMouseLeave = () => {
        clearTimeout(delayTimeoutRef.current);
        delayTimeoutRef.current = setTimeout(() => {
          setDropdownOpen(false);
        }, 1000);
      };

  return (
    <>
    <div className='flex-flex-row justify-center'>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 border-t-1 border-l-0 border-r-0 border-b-0">
            <div className="mx-auto w-full max-w-screen px-24 py-6 lg:py-8 flex flex-row justify-center">
                <button className="flex flex-row justify-between mx-10">
                <img className="w-6 mx-3" src="../images/filter.png" alt="Filter icon"></img>
                <p>Filter By</p>
                </button>

                <div className="relative inline-block flex flex-row" onClick={toggleDropdown} onMouseLeave={handleMouseLeave}>
                <p className='mx-2'>Sort By</p>
                <button
                    className="dropdown-toggle"
                    type="button"
                    id="filterDropdown"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                >
                    <img src="../images/down-arrow.png" alt="Down arrow icon" className="w-6 h-6" />
                </button>
                {dropdownOpen && (
                    <ul className="bg-white absolute w-48 transform translate-y-1/2 -translate-x-1/4 rounded border-2 border-gray-300 drop-shadow-lg" aria-labelledby="filterDropdown">
                        <li>
                            <button className="mx-auto mt-4" value="low_to_high">
                            Price: Low to high
                            </button>
                        </li>
                        <li>
                            <button className="mx-auto my-4" value="high_to_low">
                            Price: High to low
                            </button>
                        </li>
                    </ul>
                )}
                </div>
            </div>
        </div>

        <div className="w-3/4 bg-white dark:bg-gray-900 border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0 mx-auto">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 flex flex-row">
                <div className="grid grid-cols-3 gap-x-32 gap-y-8 my-8">
                    {furniture.map((item) => (
                    <Link to={`/details/${item.id}`} className="w-[27rem] mx-auto drop-shadow-lg transform transition-all duration-500 hover:scale-105" key={item.id}>
                        <img className='w-full rounded' src={item.image_path}></img>
                        <div className='flex flex-col justify-between my-6 h-14'>
                        <p className=''>{item.name}</p>
                        <p className='font-bold'>$ {item.price}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Listing
