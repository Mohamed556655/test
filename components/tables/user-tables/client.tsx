'use client';
import DataTable from '@/components/ui/data-table';

import { User } from '@/constants/data';
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
  data: User[];
}

const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  return (
    <>
      <Heading className="mb-8 mt-6" title={`إدارة المستخدمين`} />

      <Tabs defaultValue="clients">
        <TabsList>
          <TabsTrigger value="clients">العملاء و أصحاب الوحدات</TabsTrigger>
          <TabsTrigger value="added">تم أضافتهم</TabsTrigger>
          <TabsTrigger value="rejected">تم رفضهم</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />

        <TabsContent value="clients" className="space-y-4">
          <DataTable
            searchKey1="name"
            searchKey2="location"
            columns={columns}
            data={data}
          />
        </TabsContent>
        <TabsContent value="added" className="space-y-4">
          <DataTable
            searchKey1="name"
            searchKey2="location"
            columns={columns}
            data={data}
          />
        </TabsContent>
        <TabsContent value="rejected" className="space-y-4">
          <DataTable
            searchKey1="name"
            searchKey2="location"
            columns={columns}
            data={data}
          />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default UserClient;
