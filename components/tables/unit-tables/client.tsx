'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Units } from '@/constants/data';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
const Heading = dynamic(() =>
  import('@/components/ui/heading').then((module) => module.default)
);
interface ProductsClientProps {
  data: Units[];
}

const unitsClient: React.FC<ProductsClientProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  return (
    <>
      <Heading className="mb-8 mt-6" title={`إدارة الوحدات`} />

      <div className="mb-4 flex items-center gap-x-4 rounded-xl border bg-card px-4 py-3 shadow-sm">
        <Input
          placeholder={`البحث برقم الطلب...`}
          value={''}
          onChange={(event) => {}}
          className="w-full md:max-w-sm"
        />
        <Input
          placeholder={`البحث بالموقع...`}
          value={''}
          onChange={(event) => {}}
          className="w-full md:max-w-sm"
        />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {data.slice(currentPage * 10, currentPage * 10 + 10).map((unit) => (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <span
                className={cn(
                  'rounded-md px-3 py-1 text-sm font-normal text-white',
                  unit.role === 'rent'
                    ? 'bg-mytheme-orange'
                    : 'bg-mytheme-green'
                )}
              >
                {unit.role === 'rent' ? 'ايجار' : 'بيع'}
              </span>
              <span className="flex items-center gap-x-2 rounded-md bg-mytheme-lightOrange p-2 text-sm">
                <Icons.location className="size-5" />
                <span className="font-normal">{unit.location}</span>
              </span>
            </CardHeader>

            <CardContent dir="rtl">
              <Image src={unit.image} width={300} height={300} alt="unit" />

              <CardTitle className="h-xl">{unit.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 py-4">
                {unit.description}
              </CardDescription>
              <Separator />
              <div className="my-4 flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                  <Icons.bed className="size-5" />
                  <span className="font-normal">{unit.bedrooms}</span>
                  حجرات نوم
                </div>
                <div className="flex items-center gap-x-2">
                  <Icons.bath className="size-5" />
                  <span className="font-normal">{unit.bathrooms}</span>
                  حمامات
                </div>
                <div className="flex items-center gap-x-2">
                  <Icons.size className="size-5" />
                  <span className="font-normal">{unit.size}</span>
                  متر مكعب
                </div>
              </div>
              <Separator />

              <div className="mt-4 flex items-center justify-between">
                <span className="flex items-center gap-x-2">
                  السعر:
                  <span className="flex items-center font-normal text-mytheme-green">
                    <Icons.dollar className="size-4" />
                    {unit.price}
                  </span>
                </span>

                <div className="flex items-center gap-x-2">
                  <span className="grid place-items-center rounded-full bg-mytheme-green p-1">
                    <Icons.check className="size-4 text-white" />
                  </span>
                  <span className="grid place-items-center rounded-full bg-mytheme-green p-1">
                    <Icons.eye className="size-4 text-white" />
                  </span>
                  <span className="grid place-items-center rounded-full bg-mytheme-orange p-1">
                    <Icons.trash className="size-4 text-white" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-x-2">
        {(() => {
          const totalPages = Math.ceil(data.length / 6);
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
                onClick={() => setCurrentPage(page as number)}
              >
                {Number(page) + 1}
              </Button>
            );
          });
        })()}
      </div>
    </>
  );
};

export default unitsClient;
