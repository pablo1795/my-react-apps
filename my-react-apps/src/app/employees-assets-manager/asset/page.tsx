import ButtonLink from "@/global-components/ButtonLink"
import CreateTable from "@/global-components/table/CreateTable"

export default function Assets() {
  // const { data: result = { mesagge: "", result: [] }/*, isError, error*/ } = useGetAllAssetsQuery()
  const asset = {}

  const prepareRow = asset.map((value) => ([
    value.name,
    value.type,
    value.code,
    value.marca,
    <div className="flex items-center justify-center">
      <ButtonLink
        href={`/asset/${value._id}`}
        icon="📄"
        text="información"
        title="informacion"
      />
    </div>,
  ]))

  return (
    <>
      <ButtonLink
        href="/asset/create_asset"
        icon="➕"
        text="nuevo"
        title="nuevo activo"
      />
      <CreateTable
        bodyData={prepareRow}
        headerData={["nombre", "tipo", "codigo", "marca", "acciones"]}
        title="activos"
      />
    </>
  )
}
