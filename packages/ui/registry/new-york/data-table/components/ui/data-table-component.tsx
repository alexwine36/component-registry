import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from '@/registry/new-york/common/components/ui/table';
import { DataTableBody } from '@/registry/new-york/data-table/components/ui/data-table-body';
import { DataTableColumnHeader } from '@/registry/new-york/data-table/components/ui/data-table-column-header';
import { DataTablePagination } from '@/registry/new-york/data-table/components/ui/data-table-pagination';
import type { DataTableComponentProps } from '@/registry/new-york/data-table/lib/data-table-types';

// TODO: Improve functionality of DataTable
// https://github.com/sadmann7/shadcn-table/tree/main

export function DataTableComponent<TData, TValue>({
  columns,
  selectable,
  enablePagination,
  loading,
  table,
}: DataTableComponentProps<TData, TValue>) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    style={{
                      maxWidth: header.column.columnDef.maxSize,
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <DataTableColumnHeader header={header} />
                    )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <DataTableBody columns={columns} table={table} loading={loading} />
      </Table>
      {enablePagination && !loading ? (
        <DataTablePagination selectable={selectable} table={table} />
      ) : null}
    </div>
  );
}
