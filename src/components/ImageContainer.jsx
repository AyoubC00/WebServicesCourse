import { useState } from "react"
import { CommandLineIcon } from "@heroicons/react/24/outline"

const ImageContainer = ({ title, image, infoBefore, infoAfter }) =>
{
    const [show, setShow] = useState(false)
    const handleClick = () =>
    {
        setShow(prev => !prev);
    }
    return (
        <div className="">
            <code 
                className={`
                    py-3 rounded-md px-4 
                    cursor-pointer 
                    text-gray-800 
                    block
                    w-fit
                    rounded-b-none
                    ${show ? 'bg-gray-50' : 'bg-transparent'}
                    `} 
                    onClick={ handleClick }>
                <CommandLineIcon className={`w-6 inline me-2 ${show ? 'text-red-600' : 'bg-transparent'}`}/>{ title }
            </code>
            <div className={`transition bg-gray-50 py-4 rounded-md rounded-tl-none px-8 ${show ? 'visible' : 'hidden'}`}>
                <p className="mb-2">{ infoBefore }</p>
                <img className="w-full" src={ image } alt="Code Illustration" />
                <p>{ infoAfter }</p>
            </div>
        </div>
    )
}

export default ImageContainer