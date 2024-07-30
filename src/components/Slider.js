import React, { useState } from 'react'

const Slider = () => {
  const [ isActive, setIsActive] = useState(1);

  return (
    <div className='flex flex-row gap-1'>
      <div className={`rounded-full h-[2.5px] ${isActive === 1 ? 'bg-[#D7D7D7] w-2/4' : 'bg-[#868686] w-1/4'}`}></div>
      <div className={`rounded-full h-[2.5px] ${isActive === 2 ? 'bg-[#D7D7D7] w-2/4' : 'bg-[#868686] w-1/4'}`}></div>
      <div className={`rounded-full h-[2.5px] ${isActive === 3 ? 'bg-[#D7D7D7] w-2/4' : 'bg-[#868686] w-1/4'}`}></div>
    </div>
  )
}

export default Slider