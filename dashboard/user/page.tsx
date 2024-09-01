import dynamic from 'next/dynamic';
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
const UserClient = dynamic(
  () => import('@/components/tables/user-tables/client')
);
import { users } from '@/constants/data';

export default function page() {
  return (
    <PageContainer>
      <UserClient data={users} />
    </PageContainer>
  );
}
