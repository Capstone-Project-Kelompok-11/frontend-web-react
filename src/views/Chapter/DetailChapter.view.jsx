/* eslint-disable no-empty-pattern */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";

function DetailChapter() {
  const [] = useState(false);
  const [introContent] = useState(
    "Desain antarmuka pengguna (UI design) adalah bagian penting dari pengembangan produk digital yang efektif. UI design melibatkan merancang antarmuka pengguna yang mudah digunakan dan menarik, serta memperhatikan aspek-aspek seperti navigasi, tata letak, interaksi, dan estetika visual. Kursus ini akan memberikan pengantar tentang UI design dan membahas prinsip-prinsip desain antarmuka pengguna yang baik."
  );

  return (
    <div className="-ml-2">
      <h2 className="text-xl">My Chapter</h2>

      <div className="bg-warning-10 font-bold mt-6 text-3xl p-4 px-4 rounded-xl mr-8">
        <h1 className="px-4">Pengenalan tentang Desain Antar muka Pengguna</h1>
      </div>

      <h1 className="font-bold text-xl mt-6 mb-2">Pengantar</h1>
      <div className="mx-2">
        <p className="mx-1 ml-2 mr-7">{introContent}</p>
      </div>

      <h1 className="font-bold text-xl mt-6 mb-2">
        Prinsip-prinsip desain antarmuka pengguna
      </h1>
      <div className="mx-3 ml-2 px-2 ">
        <div className="flex justify-between ml-2">
          <div>
            <p className="mr-2">1.</p>
          </div>
          <p className="ml-2 mr-5">
            Keterbacaan: Desain antarmuka pengguna harus mudah dibaca dan
            dipahami oleh pengguna. Ini meliputi penggunaan font yang jelas dan
            mudah dibaca, tata letak yang jelas dan terorganisir, serta warna
            yang mudah dibaca dan kontras.
          </p>
        </div>
        <div className="flex justify-between ml-2">
          <div>
            <p className="mr-1">2.</p>
          </div>
          <p className="ml-2">
            Navigasi yang mudah: Antarmuka pengguna harus memiliki navigasi yang
            mudah dipahami dan dapat membantu pengguna mencapai tujuan mereka
            dengan cepat dan efisien.
          </p>
        </div>
        <div className="flex justify-between ml-2">
          <div>
            <p className="mr-1">3.</p>
          </div>
          <p className="ml-2">
            Konsistensi: Desain antarmuka pengguna harus konsisten dalam seluruh
            produk digital. Ini termasuk konsistensi dalam tata letak, warna,
            font, dan interaksi pengguna.
          </p>
        </div>
        <div className="flex justify-between mx-2">
          <div>
            <p className="mr-1">4.</p>
          </div>
          <p className="ml-2">
            Estetika visual: Antarmuka pengguna harus menarik secara visual dan
            menunjukkan identitas merek yang jelas. Ini dapat dicapai melalui
            penggunaan warna, gambar, dan ilustrasi yang menarik.
          </p>
        </div>
        <div className="flex justify-between ml-2">
          <div>
            <p className="mr-1">5.</p>
          </div>
          <p className="ml-2">
            Responsivitas: Desain antarmuka pengguna harus responsif dan dapat
            menyesuaikan dengan berbagai ukuran layar, baik di desktop maupun di
            perangkat mobile.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailChapter;
