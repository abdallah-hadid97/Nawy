import Image from 'next/image'
import Link from 'next/link'
import ButtonCard from './components/ButtonCard'

export default function Home() {
  return (
    <main>
      <h1>Home Arena</h1>
      <Link href="/apts"> Full Apartments Catalogue </Link>
      <ButtonCard />
    </main>
  )
}
