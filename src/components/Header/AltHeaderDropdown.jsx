import React, { useState, useRef } from "react"

const AltHeaderDropdown = ({ options = [], title }) => {
    const [isOpen, setIsOpen] = useState(false)
    const timeoutRef = useRef(null)

    // Open menu on hover
    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current)
        setIsOpen(true)
    }

    // Close menu with delay
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 100)
    }

    const handleOptionClick = () => {
        setIsOpen(false)
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`border-1 ${
                isOpen ? 'bg-white text-[#212121]' : ''
            } border-white grid-cols-5 py-2 px-5 grid overflow-hidden rounded-2xl select-none hover:bg-white hover:text-[#212121] transition-all w-57 mt-[-5px]`}
        >
            <div className='col-span-4'>
                <p className='p-3 cursor-pointer'>{title}</p>
                <div className={!isOpen ? 'hidden' : ''}>
                    {options.map((option, index) => (
                        <p
                            key={index}
                            className='p-3 cursor-pointer text-base font-normal select-none transition-all hover:bg-gray-200'
                            onClick={(e) => {
                                e.stopPropagation()
                                handleOptionClick()
                            }}
                        >
                            {option}
                        </p>
                    ))}
                </div>
            </div>
            <div
                className={`col-span-1 relative w-full flex justify-center ${
                    !isOpen ? 'items-center' : 'items-start top-[7.5%]'
                }`}
            >
                <div
                    className={`w-2 ${
                        !isOpen ? 'h-2 bg-[#ccc]' : 'h-[85%] bg-[#212121]'
                    } absolute transition-all rounded-full`}
                ></div>
            </div>
        </div>
    )
}

export default AltHeaderDropdown