import Text from "./Text"

interface ButtonProps {
  children?: React.ReactNode
  disabled?: boolean
  icon?: any
  onClick?: () => void
  style?: object
  styles?: string
  text: string
  title: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

export default function Button({
  children,
  disabled = false,
  icon,
  onClick,
  styles,
  text,
  title,
  type = "button"
}: ButtonProps) {
  return (
    <button
      className={`${disabled ? 'bg-sky-100' : 'bg-sky-800 hover:bg-sky-700'} transition-colors px-2 py-1 rounded-lg flex gap-1 ${styles}`}
      disabled={disabled}
      onClick={onClick}
      title={title}
      type={type}
    >
      {children}
      {icon && <span>{icon}</span>}
      <Text
        disabled={disabled}
        styles="font-bold lowercase"
        tag="p"
        text={text}
      />
    </button>
  )
}
