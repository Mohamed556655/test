'use client';

import { LabelList, Pie, PieChart } from 'recharts';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { useMemo } from 'react';
const chartData = [
  { user: 'الملاك', count: 250, fill: 'var(--color-الملاك)' },
  { user: 'العملاء', count: 470, fill: 'var(--color-العملاء)' }
];

const chartConfig = {
  العملاء: {
    label: 'العملاء',
    color: '#106353'
  },
  الملاك: {
    label: 'اصحاب الوحدات',
    color: '#E45333'
  }
} satisfies ChartConfig;

function PieGraph() {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="h5">نسبة المستخدمين للموقع</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="user" hideLabel />}
            />
            <Pie data={chartData} dataKey="count">
              <LabelList
                dataKey="user"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="justify-between gap-4 text-sm lg:px-10">
        <div className="flex items-center gap-x-2">
          <div className="h-[12px] w-[34px] rounded-full bg-mytheme-green"></div>
          العملاء
        </div>

        <div className="flex items-center gap-x-2">
          <div className="h-[12px] w-[34px] rounded-full bg-mytheme"></div>
          اصحاب الوحدات
        </div>
      </CardFooter>
    </Card>
  );
}

export default PieGraph;
