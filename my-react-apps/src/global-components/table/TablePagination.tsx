import Text from "../Text"
import Button from "../Button"

interface TablePaginationProps {
  currentPage: number
  onPageChange: () => null
  totalPages: number
}

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange
}: TablePaginationProps) {
  return (
    <div className="flex items-center gap-4">
      <Button
        disabled={currentPage === 1}
        icon="◀"
        onClick={() => onPageChange(currentPage - 1)}
        text="anterior"
        title="pagina anterior"
      />

      <Text text={`pagina ${currentPage} / ${totalPages}`} />

      <Button
        disabled={currentPage === totalPages}
        icon="▶"
        onClick={() => onPageChange(currentPage + 1)}
        text="siguiente"
        title="siguiente pagina"
      />
    </div>
  )
}
