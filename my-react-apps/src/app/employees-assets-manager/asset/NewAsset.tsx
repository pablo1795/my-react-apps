import ButtonLink from "@/global-components/ButtonLink"
import FormAsset from "../../components/FormAsset"

export default function Newasset() {
  const handleAddAsset = (data) => {
    // dispatch(addAsset(data))
    // navigate("/asset")
  }

  return (
    <>
      <ButtonLink
        href="/asset"
        icon="◀"
        text="atrás"
        title="volver a activos"
      />

      <FormAsset onCreate={handleAddAsset} />
    </>
  )
}
