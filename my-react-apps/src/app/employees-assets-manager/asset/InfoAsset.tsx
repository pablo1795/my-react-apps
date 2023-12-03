import ButtonLink from "@/global-components/ButtonLink"
import List from "@/global-components/List"

export default function InfoAsset() {
  // const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id)
  const asset = {}

  const employeData = [
    {
      title: "Nombre",
      text: asset.name,
    },
    {
      title: "Tipo",
      text: asset.type,
    },
    {
      title: "Codigo",
      text: asset.code,
    },
    {
      title: "Marca",
      text: asset.marca,
    },
    {
      title: "Descripción",
      text: asset.description,
    },
    {
      title: "Fecha de compra",
      text: asset.purchase_date,
    },
  ]

  return (
    <>
      <ButtonLink
        href="/asset"
        icon="◀"
        text="atrás"
        title="volver a empledos"
      />
      
      <List dataList={employeData} />

      <div className="flex gap-2 justify-end">
        <ButtonLink
          href={`/asset/update_asset/${asset._id}`}
          icon="🖍"
          title="actualizar"
          text="editar"
        />

        <ButtonLink
          href={`/asset/delete_asset/${asset._id}`}
          icon="🗑"
          text="eliminar"
          title="borrar"
        />
      </>
    </div >
  )
}
