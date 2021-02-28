export interface TableConfig<T> {
  cols: RowConfig[]
  editableRow?: boolean
  editableRowClick?: (row: T) => void
  deletableRow?: boolean
  deletableRowClick?: (row: T) => void
  addButton?: boolean
  addButtonClick?: () => void
}

interface RowConfig {
  column: string
  property: string
}
