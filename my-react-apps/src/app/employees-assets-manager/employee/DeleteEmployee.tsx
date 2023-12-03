import Button from "@/global-components/Button"
import ButtonLink from "@/global-components/ButtonLink"

export default function DeleteEmployee() {
  // const params = useParams();
  // const navigate = useNavigate();

  // const [deleteEmployee] = useDeleteEmployeeMutation();
  // const { data: result = { mesagge: "", result: [] } } = useGetEmployeeByIdQuery(params.id);
  // const employeeToDelete = result.result;

  const handleDeleteEmployee = () => {
    // deleteEmployee({ id: params.id })
    // navigate("/employee");
  }

  return (
    <section className="flex flex-col gap-5 items-center">
      <header>
        <h2>employees & assets manager</h2>
      </header>

      <section className="flex justify-between p-3">
        <input type="text" placeholder="Buscar" />

        <ButtonLink
          // href={`/employee/${params.id}`}
          icon="◀"
          text="atrás"
          title="volver a empledos"
        />
      </section>

      {/* <p className="text-stone-100 text-xl">deseas eliminar el empleado {employeeToDelete.first_name}</p> */}

      <div className="flex gap-5">
        <Button
          icon="🗑"
          onClick={() => handleDeleteEmployee()}
          text="eliminar"
          title="borrar"
        />
        <Button
          icon="✖"
          // onClick={() => navigate(`/employee/${params.id}`)}
          text="cancelar"
          title="cancelar"
        />
      </div>
    </section>
  )
}
