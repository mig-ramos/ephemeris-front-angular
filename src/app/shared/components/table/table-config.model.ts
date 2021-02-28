import { Observable } from "rxjs";

export interface TableConfig<T> {
  cols: RowConfig[]
  editableRow?: boolean
  editableRowClick?: (row: T) => void
}

interface RowConfig {
  column: string
  property: string
}
