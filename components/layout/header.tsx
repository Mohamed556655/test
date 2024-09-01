import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import SearchInput from '../SearchInput';

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 flex w-full items-center justify-between bg-card py-2 shadow-lg">
      <SearchInput />
      <nav className="flex items-center justify-between self-end px-4 py-2">
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </header>
  );
}
