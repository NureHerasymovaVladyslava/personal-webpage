import React, { useEffect, useRef, useState } from 'react'

export default function ImageGallery(props) {
  const {images} = props
  const [imageId, setImageId] = useState(0)
  const interval = useRef(null)

  function showNextImage() {
    setImageId(i => i === images.length - 1 ? 0 : i + 1)
  }

  function showPrevImage() {
    setImageId(i => i === 0 ? images.length - 1 : i - 1)
  }

  useEffect(() => {
    interval.current = setInterval(showNextImage, 2000)

    return () => clearInterval(interval.current)
  }, [])

  return (
    <div className='flex flex-col relative'>
      <div className='flex shadow-xl overflow-hidden'
        onMouseOver={() => clearInterval(interval.current)}
        onMouseLeave={() => {interval.current 
        = setInterval(showNextImage, 2000)}}>
        {images.map((url, index) => 
        <img className='w-full object-cover duration-300'
          style={{translate: `${-100 * imageId}%`}}
          src={url} key={index} />)}
      </div>
      <button className='absolute top-0 bottom-0 left-0 px-2 z-10 
        bg-gray-700 bg-opacity-50 text-xl' 
        onClick={showPrevImage}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button className='absolute top-0 bottom-0 right-0 px-2 z-10 
        bg-gray-700 bg-opacity-50 text-xl' 
        onClick={showNextImage}>
        <i class="fa-solid fa-chevron-right"></i>
        </button>
    </div>
  )
}
