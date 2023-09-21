import Image from 'next/image'
import MainHeader  from './components/MainHeader'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F5DC]">
      <div className="container mx-auto px-12 py-4">
        <MainHeader />
      </div>
      
    </main>
  )
}
