'use client';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  Updater,
  useReactTable
} from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';

const Table = dynamic(() =>
  import('@/components/ui/table').then((module) => module.Table)
);
const TableBody = dynamic(() =>
  import('@/components/ui/table').then((module) => module.TableBody)
);
const TableCell = dynamic(() =>
  import('@/components/ui/table').then((module) => module.TableCell)
);
const TableHeader = dynamic(() =>
  import('@/components/ui/table').then((module) => module.TableHeader)
);
const TableRow = dynamic(() =>
  import('@/components/ui/table').then((module) => module.TableRow)
);
const Input = dynamic(() => import('./input').then((module) => module.Input));
const Button = dynamic(() =>
  import('./button').then((module) => module.Button)
);
const ScrollArea = dynamic(() =>
  import('./scroll-area').then((module) => module.ScrollArea)
);
const ScrollBar = dynamic(() =>
  import('./scroll-area').then((module) => module.ScrollBar)
);
const Plus = dynamic(() =>
  import('lucide-react').then((module) => module.Plus)
);

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchKey1?: string;
  searchKey2?: string;
}

function DataTable<TData, TValue>({
  columns,
  data,
  searchKey1,
  searchKey2
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    pageCount: Math.ceil(data.length / 10)
  });
  const router = useRouter();

  /* this can be used to get the selectedrows 
  console.log("value", table.getFilteredSelectedRowModel()); */

  return (
    <>
      {searchKey1 && searchKey2 && (
        <div className="mb-4 flex items-center gap-x-4 rounded-xl border bg-card px-4 py-3 shadow-sm">
          {searchKey1 && (
            <Input
              placeholder={`البحث ب${searchKey1 === 'name' && 'الأسم'}...`}
              value={
                (table.getColumn(searchKey1)?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn(searchKey1)?.setFilterValue(event.target.value)
              }
              className="w-full md:max-w-sm"
            />
          )}
          {searchKey2 && (
            <Input
              placeholder={`البحث ب${searchKey2 === 'location' && 'الموقع'}...`}
              value={
                (table.getColumn(searchKey2)?.getFilterValue() as string) ?? ''
              }
              onChange={(event) =>
                table.getColumn(searchKey2)?.setFilterValue(event.target.value)
              }
              className="w-full md:max-w-sm"
            />
          )}
        </div>
      )}

      <ScrollArea className="h-[calc(100dvh-400px)] rounded-xl border border-mytheme-green/20 bg-card shadow-sm lg:min-h-[calc(80dvh-8rem)]">
        <Table className="relative [&_button:has([role=checkbox])]:!pr-2">
          <TableHeader className="bg-[#f6f7ff]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableCell key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table
                .getRowModel()
                .rows?.slice(
                  (table.getState().pagination.pageIndex || 0) *
                    table.getState().pagination.pageSize,
                  (table.getState().pagination.pageIndex || 0) *
                    table.getState().pagination.pageSize +
                    10
                )
                .map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="mb-4 mt-6 flex items-center justify-between px-10">
          {/* <div className="space-x-4">
              <Button
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                السابق
              </Button>
              <Button
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                التالي
              </Button>
            </div> */}

          {/* <p>{table.getPageCount()}</p> */}

          <div className="flex items-center gap-x-2">
            {(() => {
              const currentPage = table.getState().pagination.pageIndex;
              const totalPages = table.getPageCount();
              const pagesToShow = new Set();

              // First page (only if not on first page)
              if (currentPage !== 0) {
                pagesToShow.add(0);
              }

              // Ellipsis after first page
              if (currentPage > 2) {
                pagesToShow.add('ellipsis1');
              }

              // Previous page (if it's not the first page)
              if (currentPage > 1) {
                pagesToShow.add(currentPage - 1);
              }

              // Current page
              pagesToShow.add(currentPage);

              // Next page (if it's not the last page)
              if (currentPage < totalPages - 2) {
                pagesToShow.add(currentPage + 1);
              }

              // Ellipsis before last page
              if (currentPage < totalPages - 3) {
                pagesToShow.add('ellipsis2');
              }

              // Last page (only if not on last page)
              if (totalPages > 1 && currentPage !== totalPages - 1) {
                pagesToShow.add(totalPages - 1);
              }

              return Array.from(pagesToShow).map((page, index) => {
                if (page === 'ellipsis1' || page === 'ellipsis2') {
                  return <span key={page}>...</span>;
                }

                return (
                  <Button
                    size="sm"
                    key={index}
                    variant={page === currentPage ? 'default' : 'ghost'}
                    className={cn('size-8 rounded-md shadow-sm')}
                    onClick={() => table.setPageIndex(page as Updater<number>)}
                  >
                    {Number(page) + 1}
                  </Button>
                );
              });
            })()}
          </div>

          <Button
            className="bg-mytheme-green"
            onClick={() => router.push(`/dashboard/user/new`)}
          >
            <Plus className="size-4 text-card" />
          </Button>
        </div>

        <ScrollBar />
      </ScrollArea>
    </>
  );
}

export default DataTable;
