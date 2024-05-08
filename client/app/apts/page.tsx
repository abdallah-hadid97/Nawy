import React from 'react'
import Link from 'next/link'

interface Apt {
  id: string;
  ref: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  finished: boolean;
  deliveryDate: number;
  image: string;
}

const AptsPage = async () => {
  const res = await fetch('http://localhost:8080/apts', {cache: 'no-store'});
  const apts: Apt[] = await res.json();
  
  return (
    <>
      <h1>Apartments</h1>
      <ul className='grid grid-cols-4 gap-4 items-center'>
        {
          apts.map(apt => (
          <li className = "w-52 mx-4" key={apt.id}>
            <Link href={`/apts/details/${apt.id}`}>
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

export default AptsPage
