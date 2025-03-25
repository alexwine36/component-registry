'use client';

import { DataTable } from './components/ui/data-table';
import { useDataTable } from './hooks/use-data-table';

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    email: '',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 22,
    email: '',
  },
  {
    id: 3,
    name: 'John Smith',
    age: 30,
    email: '',
  },
];

export const DataTableExample = () => {
  const table = useDataTable({
    columns: [
      {
        header: 'Name',
        accessorKey: 'name',
        enableSorting: true,
      },
      {
        header: 'Age',
        enableColumnFilter: true,
        enableSorting: true,
        accessorKey: 'age',
      },
      {
        header: 'Email',
        accessorKey: 'email',
        enableHiding: true,
        hidden: true,
      },
    ],
    data,
  });

  return <DataTable {...table} />;
};
