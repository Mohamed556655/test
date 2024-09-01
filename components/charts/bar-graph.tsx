'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '../icons';
import { useMemo } from 'react';

const chartData = [
  { country: 'السعودية', units: 5000 },
  { country: 'فلسطين', units: 8000 },
  { country: 'مصر', units: 7000 },
  { country: 'الأردن', units: 5000 },
  { country: 'فرنسا', units: 5000 },
  { country: 'استراليا', units: 5000 },
  { country: 'امريكا', units: 5000 },
  { country: 'اوروبا', units: 5000 }
];

function BarGraph() {
  const maxUnits = useMemo(() => {
    return Math.max(...chartData.map(({ units }) => units));
  }, [chartData]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="h5">الوحدات علي الخريطة</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between max-lg:flex-col">
        <div className="space-y-4">
          {chartData.map(({ country, units }) => (
            <div
              key={country}
              className="relative flex justify-between gap-x-10"
            >
              <div className="font-semibold">{country}</div>
              <div className="w-max text-sm">{units} وحدة</div>
              <span className="absolute -bottom-2 right-0 h-1.5 w-full rounded-full bg-[#E1DFDF]"></span>
              <span
                className="absolute -bottom-2 right-0 h-1.5 rounded-full bg-mytheme-green"
                style={{ width: `${(units / maxUnits) * 100}%` }}
              ></span>
            </div>
          ))}
        </div>
        <div className="grow">
          <Icons.earth className="mx-auto max-w-full p-4" />
        </div>
      </CardContent>
    </Card>
  );
}

export default BarGraph;
