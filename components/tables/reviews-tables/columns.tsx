'use client';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Review } from '@/constants/data';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { MapPin, StarIcon } from 'lucide-react';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export const columns: ColumnDef<Review>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <div className="flex w-max items-center gap-x-2">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
        تحديد الكل
      </div>
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
    accessorKey: 'id',
    header: '',
    cell: ({ row }) => <div className="w-0"></div>
  },
  {
    accessorKey: 'name',
    header: '',
    cell: ({ row }) => (
      <div className="-ms-16 flex w-max flex-col gap-y-1 pe-2">
        <span>{row.getValue('id')}</span>
        <span>{row.getValue('name')}</span>
      </div>
    )
  },
  {
    accessorKey: 'date',
    header: '',
    cell: ({ row }) => {
      const date: Date = row.getValue('date');
      const formattedDate = new Date(date).toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      return (
        <div className="flex min-w-36 flex-col gap-y-1 text-center">
          <span>{formattedDate}</span>
          <span>{date.toLocaleTimeString('ar-EG')}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'location',
    header: '',
    cell: ({ row }) => (
      <div className="mx-2 flex items-center gap-x-1 rounded-md bg-mytheme-lightOrange/60 px-2 py-1">
        <MapPin className="h-4 w-4" />
        {row.getValue('location')}
      </div>
    )
  },
  {
    accessorKey: 'description',
    header: '',
    cell: ({ row }) => (
      <div className="px-4 text-center max-lg:line-clamp-3">
        {row.getValue('description')}
      </div>
    )
  },
  {
    accessorKey: 'review',
    header: '',
    cell: ({ row }) => (
      <div className="px-4 text-center">
        <div className={`flex flex-col gap-y-1 lg:gap-y-2 lg:py-2`}>
          {(row.getValue('review') as number) >= 3 ? (
            <span className="mx-auto w-fit rounded-lg bg-mytheme-green/10 px-2  py-1 font-semibold text-mytheme-green">
              ممتاز
            </span>
          ) : (
            <span className="mx-auto w-fit rounded-lg bg-mytheme px-2 py-1 font-semibold text-white">
              غير راض
            </span>
          )}

          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <StarIcon
                key={i}
                className={cn(
                  `size-4`,
                  i < Number(row.getValue('review'))
                    ? 'fill-mytheme-orange text-mytheme-orange'
                    : 'fill-slate-100 text-slate-100'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'actions',
    header: (
      <div className="flex items-center gap-x-2 pe-4">
        <Button className="hover:brightness-110">قبول</Button>
        <Button
          variant={'outline'}
          className="border-primary bg-white text-primary"
        >
          رفض
        </Button>
      </div>
    ),
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
