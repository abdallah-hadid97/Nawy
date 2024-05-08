import React from 'react'
import Link from 'next/link'


const AptsPage = async () => {
  const res = await fetch('http://localhost:8080/apts', {cache: 'no-store'});
  const apts = await res.json();
  
  return (
    <>
      <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Apartments</h1>
      <ul className="grid grid-cols-4 gap-4">
        {apts.map((apt: any) => (
      <li className="w-52 mx-4 h-80" key={apt._id}>
        <Link href={`http://localhost:3000/apts/details/${apt._id}`}>
            <img className="w-full h-48 object-cover mb-2 rounded-lg" src={apt.image} alt={apt.title} />
            <div className="text-gray-800 bg-gray-200 px-4 py-2 hover:bg-gray-400 transition duration-300 rounded-lg">
              <h2 className="text-lg font-semibold mb-1">{apt.title}</h2>
              <span className="rounded-lg p-1 px-1 bg-gray-200">{apt.price} EGP</span>
            </div>
        </Link>
      </li>
    ))} 
  </ul>
</div>
    </>
  )
}

export default AptsPage;
