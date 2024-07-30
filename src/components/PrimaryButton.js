import React from 'react'

const PrimaryButton = ({content, additionalClassName}) => {
  return (
    <button className={`px-4 py-2 rounded-[6px] font-[500] text-white bg-[#DD8538] text-[14px] w-full ${additionalClassName}`}>
      {content}
    </button>
  )
}

export default PrimaryButton