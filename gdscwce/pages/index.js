import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Section3 from "../components/section3";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-6">
        <img src="/logo.png" className="w-36" />
        <ul className="flex space-x-4 text-base font-bold">
          <li>
            <Link href='/' className="hover:bg-blue-500 p-4 rounded-3xl dark">Home</Link>
          </li>
          <li>
            <Link href='/' className="hover:bg-blue-500 p-4 rounded-3xl">Team</Link>
          </li>
          <li>
            <Link href='/' className="hover:bg-blue-500 p-4 rounded-3xl">About us</Link>
          </li>
          <li>
            <Link href='/' className="hover:bg-blue-500 p-4 rounded-3xl">Contact us</Link>
          </li>

        </ul>
      </nav>

      <Section3 />
      
    </div>
  );
}
