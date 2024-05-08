import Image from 'next/image'
import Link from 'next/link'
import ButtonCard from './components/ButtonCard'

export default function Home() {
  return (
    <main>
      <div className="flex">
  <div className="w-1/4 h-screen bg-gray-200 p-4">
    <h2 className="text-xl font-semibold mb-4">Let's Find Your Perfect Home !</h2>
    <div className="space-y-2">
      <Link href="/apts">
        <div className="block border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition duration-300">
          Apartments Catalogue
        </div>
      </Link>
    </div>
  </div>
  <main className="flex-1 p-4 flex flex-col justify-start items-center">
  <h1 className="text-5xl font-serif font-extrabold mb-8">Home Arena</h1>
  <img src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2022/12/07082032/10-Companies-That-Hire-for-Remote-Real-Estate-Jobs-1024x512.jpg" alt="Home Arena Image" />
</main>
</div>
    </main>
  )
}
