import CardApp from "./CardApp"

export default function Proyects() {
  return (
    <section className="flex flex-col gap-4 p-4">
      <header>
        <h2 className="text-2xl capitalize">proyectos</h2>
      </header>

      <div className="grid grid-cols-3 gap-4">
        <CardApp
          name="to do list app"
          href="to-do-list"
        />

        <CardApp
          name="employees & assets app"
          href="employees-assets-manager/employee"
        />

        <CardApp
          name="javascript quiz app"
        />
      </div>
    </section>
  )
}
