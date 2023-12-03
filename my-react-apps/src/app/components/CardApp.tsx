import Link from "next/link"

interface CardAppProps {
  name: string,
  href?: string,
}

export default function CardApp({
  name,
  href
}: CardAppProps) {
  return (
    <Link href={`/${href || ""}`}>
      <article className="bg-sky-800 flex justify-center items-center border-2 border-sky-100 rounded-lg p-4 h-40 hover:bg-sky-700">
        <h3 className="text-xl capitalize text-center">{name}</h3>
      </article>
    </Link>
  )
}
