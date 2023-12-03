import ButtonLink from "@/global-components/ButtonLink"
import List from "@/global-components/List"

export default function InfoEmployee() {
  // const { data: result = { mesagge: "", result: [] }, isError, error } = useGetEmployeeByIdQuery(params.id);
  const employee = {}

  const menuActions = [
    <ButtonLink
      href="/employee"
      icon="◀"
      text="atrás"
      title="volver a empledos"
    />
  ]

  const employeData = [
    {
      title: "Apellido y nombre",
      text: employee.last_name + " " + employee.first_name,
    },
    {
      title: "CUIT",
      text: employee.cuit || "no definido",
    },
    {
      title: "Comision",
      text: employee.team_id || "no definido",
    },
    {
      title: "Fecha de ingreso",
      text: employee.join_date || "no definido",
    },
    {
      title: "Rol",
      text: employee.rol || "no definido",
    },
  ]

  return (
    <>
      <List dataList={employeData} />

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/employee/update_employee/${employee._id}`}
          icon="🖍"
          title='actualizar'
          text='editar'
        />

        <ButtonLink
          href={`/employee/delete_employee/${employee._id}`}
          icon="🗑"
          text='eliminar'
          title='borrar'
        />
      </div>
    </>
  )
}
