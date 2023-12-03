import ButtonLink from "@/global-components/ButtonLink"
import FormAsset from "../../components/FormAsset"

export default function EditAsset() {

  // const { data: result = { mesagge: "", result: [] } } = useGetAssetByIdQuery(params.id)
  const assetToEdit = {}

  const handleEditAsset = () => {
    // navigate("/asset")
  }

  return (
    <>
      <ButtonLink
        // href={`/asset/${params.id}`}
        icon="◀"
        text="atrás"
        title="volver a empledos"
      />
      <FormAsset assetData={assetToEdit} onEdit={handleEditAsset} />
    </>
  )
}
