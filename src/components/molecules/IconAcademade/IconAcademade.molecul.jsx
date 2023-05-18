import React from 'react'
import logo from "../../../assets/iconbook.png"

function IconAcademade() {
  return (
		<section className="flex items-center gap-2">
			<img src={logo} alt="Academade" className="w-12 h-12" />
			<h1 className="font-bold text-3xl text-primary-70">AcadeMade</h1>
		</section>
	);
}

export default IconAcademade