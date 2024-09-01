import dynamic from 'next/dynamic';
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
const UnitTable = dynamic(
  () => import('@/components/tables/unit-tables/client')
);
import { units } from '@/constants/data';

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <UnitTable data={units} />
    </PageContainer>
  );
}
