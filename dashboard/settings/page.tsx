import dynamic from 'next/dynamic';
const OffersTab = dynamic(() =>
  import('./OffersTab').then((moudle) => ({ default: moudle.OffersTab }))
);
const PaymentsTab = dynamic(() =>
  import('./PaymentsTab').then((moudle) => ({ default: moudle.PaymentsTab }))
);
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
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

const SettingPage = () => {
  return (
    <PageContainer>
      <Heading className="mb-8 mt-6" title={`اعدادات الموقع`} />

      <Tabs defaultValue="offers">
        <TabsList>
          <TabsTrigger value="offers">العروض</TabsTrigger>
          <TabsTrigger value="payments">وسائل الدفع</TabsTrigger>
        </TabsList>
        <Separator className="mb-4" />

        <TabsContent value="offers" className="space-y-4">
          <OffersTab />
        </TabsContent>
        <TabsContent value="payments" className="space-y-4">
          <PaymentsTab />
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};
export default SettingPage;
