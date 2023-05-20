import React from 'react'

function ContactInformation({items}) {
const {name , text} = items

  return (
    <div className='flex flex-col items-start text-sm bg-[#6EA8FE] w-full px-2 py-1 my-1 rounded-xl'>
       <p className='opacity-60'>{name}</p>
       <p>{text}</p>

    </div>
  )
}

export default ContactInformation