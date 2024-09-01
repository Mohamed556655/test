import dynamic from 'next/dynamic';

const AreaGraph = dynamic(() => import('@/components/charts/area-graph'));
const BarGraph = dynamic(() => import('@/components/charts/bar-graph'));
const PieGraph = dynamic(() => import('@/components/charts/pie-graph'));
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
const Card = dynamic(() =>
  import('@/components/ui/card').then((mod) => mod.Card)
);
const CardContent = dynamic(() =>
  import('@/components/ui/card').then((mod) => mod.CardContent)
);
const CardDescription = dynamic(() =>
  import('@/components/ui/card').then((mod) => mod.CardDescription)
);
const CardTitle = dynamic(() =>
  import('@/components/ui/card').then((mod) => mod.CardTitle)
);
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { dashboardItems } from '@/constants/data';

export default function DashboardPage() {
  return (
    <PageContainer scrollable={true}>
      <h2 className="mt-4 text-right text-2xl font-bold tracking-tight">
        لوحة التحكم
      </h2>

      <div className="my-8 space-y-4">
        <div className="flex w-full gap-4 max-lg:flex-col">
          {dashboardItems.map((item) => {
            const Icon = Icons[item.icon ?? 'arrowRight'];

            return (
              <Card key={item.title} className="flex-1">
                <CardContent className="flex items-center justify-between gap-8 py-4">
                  <div>
                    <CardTitle className="h-xl">{item.title}</CardTitle>
                    <CardDescription className="text text-xl font-bold text-mytheme">
                      {item.value}
                    </CardDescription>
                  </div>

                  <div className="rounded-full bg-green-300/30 p-3">
                    <Icon
                      className={cn(
                        'size-14 text-green-800 ',
                        item.icon === 'dollar' &&
                          'rounded-full border-2 border-green-700'
                      )}
                    />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-4">
            <AreaGraph />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <PieGraph />
          </div>
          <div className="col-span-4 lg:col-span-7">
            <BarGraph />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
