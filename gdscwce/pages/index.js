import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className = 'bg-slate-400'>
    <div className=' flex content-center text-center ml-56 '>
    <Image src="/nobita.jpg" alt="Nobita Logo" width={320} height={10} className = "content-center border-4 shadow-md ml-72 mt-10 mb-10"/>
    <h1 className='text-5xl text-center h-12 mt-64 ml-10 '>Let's Start</h1>
    <h1 className='text-5xl text-center h-12 mt-64  ml-2 tracking-wide '>Guyzz!!🤟</h1>
    <button className='text-center border-4 h-12 border-r-4 p-2  mt-80 -ml-72 hover:bg-teal-500 border-teal-400 rounded-2xl'>HardWork🔥</button>
    </div>
    </div>
  )
}
