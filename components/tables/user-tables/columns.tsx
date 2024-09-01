'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { User } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';

export const columns: ColumnDef<User>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: 'العملاء و أصحاب الوحدات'
  },
  {
    accessorKey: 'role',
    header: 'نوع المستخدم'
  },
  {
    accessorKey: 'location',
    header: 'الموقع'
  },
  {
    accessorKey: 'phone',
    header: 'رقم الهاتف'
  },
  {
    accessorKey: 'email',
    header: 'البريد الالكتروني'
  },
  {
    id: 'actions',
    header: 'الاعدادات',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
