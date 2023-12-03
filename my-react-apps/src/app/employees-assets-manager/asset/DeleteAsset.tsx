import Button from "@/global-components/Button"
import ButtonLink from "@/global-components/ButtonLink"

export default function DeleteAsset() {
  // const [deleteAsset] = useDeleteAssetMutation()
  // const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id)
  const assetToDelete = {}

  const handleDeleteAsset = () => {
    // deleteAsset({ id: params.id })
    // navigate("/asset")
  }

  return (
    <>
      <ButtonLink
        // href={`/asset/${params.id}`}
        icon="◀"
        text="atrás"
        title="volver a activos"
      />

      <section className="flex flex-col gap-5 items-center">
        <p className="text-stone-100 text-xl">deseas eliminar el activo {assetToDelete.name}</p>

        <div className="flex gap-5">
          <Button
            icon="🗑"
            // onClick={() => handleDeleteAsset()}
            text="eliminar"
            title="borrar"
          />
          <Button
            icon="✖"
            // onClick={() => navigate(`/asset/${params.id}`)}
            text="cancelar"
            title="cancelar"
          />
        </div>
      </section>
    </>
  )
}
