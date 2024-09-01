'use client';
import DataTable from '@/components/ui/data-table';
import { Review } from '@/constants/data';
import { columns } from './columns';
import dynamic from 'next/dynamic';
const Heading = dynamic(() =>
  import('@/components/ui/heading').then((module) => module.default)
);
const Separator = dynamic(() =>
  import('@/components/ui/separator').then((module) => module.Separator)
);
const Tabs = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.Tabs)
);
const TabsContent = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsContent)
);
const TabsList = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsList)
);
const TabsTrigger = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsTrigger)
);

interface ProductsClientProps {
  data: Review[];
}

const ReviewClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <>
      <Heading className="mb-8 mt-6" title={`إدارة التقييمات`} />

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">كل التقييمات</TabsTrigger>
          <TabsTrigger value="accepted">المنشورة</TabsTrigger>
          <TabsTrigger value="rejected">المرفوضة</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />

        <TabsContent value="all" className="space-y-4">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="accepted" className="space-y-4">
          <DataTable columns={columns} data={data} />
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          <DataTable columns={columns} data={data} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ReviewClient;
