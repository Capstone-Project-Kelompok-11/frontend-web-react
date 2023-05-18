import React from 'react'
import logo from "../../../assets/iconbook.png"

function IconAcademade() {
  return (
    <div className='px-8 justify-center flex flex-row'>
    <img src={logo} alt="Academade" width={60}  className='py-12 -mt-2' />
    <h1 className='pt-12 font-bold text-2xl text-logo'>AcadeMade</h1>
    </div>
  )
}

export default IconAcademade