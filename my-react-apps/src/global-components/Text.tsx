interface TextProps {
  children?: React.ReactNode
  color?: string
  disabled?: boolean
  styles?: string
  tag: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  text: string
}

export default function Text({
  children,
  color = 'text-stone-100',
  disabled = false,
  styles,
  tag = 'p',
  text
}: TextProps) {
  const Component = tag
  return (
    <Component className={`${disabled ? 'text-stone-500' : color} ${styles}`}>
      {children || text}
    </Component>
  )
}
