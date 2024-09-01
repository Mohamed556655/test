import dynamic from 'next/dynamic';
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
const ReviewClient = dynamic(
  () => import('@/components/tables/reviews-tables/client')
);
import { reviews } from '@/constants/data';

export default function page() {
  return (
    <PageContainer>
      <ReviewClient data={reviews} />
    </PageContainer>
  );
}
