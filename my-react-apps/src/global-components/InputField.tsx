interface InputFieldProps {
  label: string
  maxLength: number
  min: 0
  minLength: number
  name: string
  onChange: (event: any) => void
  pattern: string
  placeholder: string
  required: boolean
  title: string
  type: string
  value: string
}

export default function InputField({
  label,
  maxLength,
  min = 0,
  minLength,
  name,
  onChange,
  pattern,
  placeholder,
  required,
  title,
  type = "text",
  value,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      {
        label &&
        <label htmlFor={name} className="text-stone-100">{label} {required && <span className="text-red-700 text-xl">*</span>}</label>
      }
      <input
        className="bg-stone-800 text-stone-100 outline outline-1 outline-stone-600 px-2 py-1"
        id={name}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        onChange={onChange}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        title={title}
        type={type}
        value={value}
      />
    </div>
  )
}
