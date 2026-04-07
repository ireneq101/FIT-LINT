import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className="bg-[#4CAF50] hover:bg-[#45a049] text-white px-4 py-2 md:px-6 md:py-3 font-medium transition-all shadow-lg rounded-lg mb-20">
            {text}
        </button>
    )
}

export default Button