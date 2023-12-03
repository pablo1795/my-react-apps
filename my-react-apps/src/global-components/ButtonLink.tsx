import Link from "next/link"
import Text from "./Text"

interface ButtonLinkProps {
  disabled?: boolean
  href?: string
  icon?: any
  style?: object
  text: string
  title: string
}

export default function ButtonLink({
  disabled = false,
  href,
  icon,
  text,
  title,
}: ButtonLinkProps) {
  return (
    <Link
      className={`${disabled ? "bg-stone-800" : "bg-stone-700 hover:bg-stone-600"} px-2 py-1 flex gap-1`}
      title={title}
      href={`/${href || ""}`}
    >
      {icon && <span>{icon}</span>}
      <Text text={text} disabled={disabled} styles="font-bold lowercase" />
    </Link>
  )
}
