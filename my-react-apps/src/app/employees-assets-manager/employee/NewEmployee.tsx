import ButtonLink from "@/global-components/ButtonLink"
import FormEmployee from "../../components/FormEmployee"

export default function NewEmployee() {
  const handleAddEmployee = (data) => {
    // dispatch(addEmployee(data))
    // navigate("/employee")
  }

  return (
    <>
      <ButtonLink
        href="/employee"
        icon="◀"
        text="atrás"
        title="volver a empledos"
      />

      <FormEmployee onCreate={handleAddEmployee} />
    </>
  )
}
