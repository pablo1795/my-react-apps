import Link from "next/link"

export default function NavBar() {
  return (
    <nav className="bg-sky-800 border-b-2 border-sky-100 flex justify-between items-center px-5 py-2">
      <header>
        <Link href="/">
          <h1 className="bg-sky-100 rounded-lg text-xl font-bold text-sky-700 px-2 py-1">my react apps</h1>
        </Link>
      </header>

      <ul className="flex gap-5">
        <li className="hover:underline"><Link href="/">Inicio</Link></li>
        <li className="hover:underline">cambiar color</li>
      </ul>
    </nav>
  )
}
