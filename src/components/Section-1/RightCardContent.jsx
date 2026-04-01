import React from 'react'

const RightCardContent = (props) => {
  return (
   <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col '>
            <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>

            <div className='mt-auto mb-20'>
                <p className='text-lg leading-relaxed text-white  '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dignissimos aperiam distinctio molestias itaque nesciunt!</p>
            </div>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}}className= 'text-white font-medium px-7  py-3  rounded-full '>{props.tag}</button>
               <button><i className="ri-arrow-right-fill  text-white font-medium px-5  py-3  rounded-full"></i></button>
            </div>

        </div>
  )
}

export default RightCardContent
