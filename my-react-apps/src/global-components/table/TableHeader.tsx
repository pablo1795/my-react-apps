interface TableHeaderProp {
  columns: Array<string>
}

export default function TableHeader({
  columns
}: TableHeaderProp) {
  return (
    <thead className="bg-sky-800">
      <tr>
        <th className="text-stone-100 py-2 uppercase">N°</th>
        {columns.map((headerCell, index) => (
          <th className="text-stone-100 py-2 uppercase" key={index}>
            {headerCell}
          </th>
        ))}
      </tr>
    </thead>
  )
}
