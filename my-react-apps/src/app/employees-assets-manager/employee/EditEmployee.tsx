import ButtonLink from "@/global-components/ButtonLink"
import FormEmployee from "../../components/FormEmployee"

export default function EditEmployee() {
  // const { data: result = { mesagge: "", result: [] } } = useGetEmployeeByIdQuery(params.id)
  const employeeToEdit = {}

  const handleEditEmployee = () => {
    // navigate("/employee")
  }

  return (
    <>
      <ButtonLink
        // href={`/employee/${params.id}`}
        icon="◀"
        text="atrás"
        title="volver a empledos"
      />

      <FormEmployee employeeData={employeeToEdit} onEdit={handleEditEmployee} />
    </>
  )
}
