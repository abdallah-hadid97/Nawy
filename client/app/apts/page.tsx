import React from 'react'
import Link from 'next/link'


const AptsPage = async () => {
  const res = await fetch('http://localhost:8080/apts', {cache: 'no-store'});
  const apts = await res.json();
  
  return (
    <>
      <h1>Apartments</h1>
      <ul className='grid grid-cols-4 gap-4 items-center'>
        {
          apts.map((apt: any) => (
          <li className = "w-52 mx-4" key={apt._id}>
            <Link href={`http://localhost:3000/apts/details/${apt._id}`}>
            <img src={apt.image} alt={apt.title}/>
            <div className="p-2 text-black bg-gray-400">
              {apt.title} <span className="rounded-lg p-1 px-1 ml-2 bg-gray-200">${apt.price}</span>
            </div>
            </Link>
          </li>
          ))
        }
      </ul>
    </>
  )
}

export default AptsPage;
