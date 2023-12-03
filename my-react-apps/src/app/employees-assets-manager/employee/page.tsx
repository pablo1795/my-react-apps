"use client"

import ButtonLink from "@/global-components/ButtonLink"
import CreateTable from "@/global-components/table/CreateTable"

export default function Employees() {
  const employees = [{}]

  const prepareRow = employees.map((value) => ([
    value._id,
    value.first_name,
    value.last_name,
    value.team_id,
    <div className="flex items-center justify-center">
      <ButtonLink
        href={`employee/${value._id}`}
        icon="📄"
        text="información"
        title="información"
      />
    </div>,
  ]))

  return (
    <section>
      <header>
        <h2>employees & assets manager</h2>
      </header>

      <section className="flex justify-between p-3">
        <input type="text" placeholder="Buscar" />

        <ButtonLink
          href="/employee/create_employee"
          icon="➕"
          text="nuevo"
          title="nuevo empleado"
        />
      </section>

      <CreateTable
        bodyData={prepareRow}
        headerData={["N° id", "apellido/s", "nombre/s", "comisión", "acciones"]}
        title="empleados"
      />
    </section>
  )
}
