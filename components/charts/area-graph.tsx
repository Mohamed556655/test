'use client';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Icons } from '../icons';

const chartData = [
  { month: 'يناير', units: 14 },
  { month: 'فبراير', units: 100 },
  { month: 'مارس', units: 85 },
  { month: 'أبريل', units: 50 },
  { month: 'مايو', units: 120 },
  { month: 'يونيو', units: 146 },
  { month: 'أغسطس', units: 214 },
  { month: 'سبتمبر', units: 168 },
  { month: 'أكتوبر', units: 186 },
  { month: 'نوفمبر', units: 220 },
  { month: 'ديسمبر', units: 132 }
];

const chartConfig = {
  units: {
    label: 'الوحدات',
    color: 'hsl(var(--chart-1))'
  }
} satisfies ChartConfig;

function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h5">احصائيات الايجار</CardTitle>
        <CardDescription className="flex items-center gap-2 py-4">
          <span className="rounded-full bg-mytheme p-2">
            <Icons.home />
          </span>
          <div className="flex flex-col">
            <p>إجمالي الإيجار</p>
            <p>1500 وحدة</p>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent dir="rtl">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 4
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              xmlLang="ar"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />

            <Area
              dataKey="units"
              type="natural"
              fill="var(--color-units)"
              fillOpacity={0.15}
              stroke="var(--color-units)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

export default AreaGraph;
