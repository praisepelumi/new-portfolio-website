import Image from 'next/image'
import MainHeader  from './components/MainHeader';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F5DC]">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainHeader />
      </div>
      
    </main>
  )
}
