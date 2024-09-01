import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

const SearchInput = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative mx-auto w-[50dvw]', className)}>
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <Search className="size-4" />
      </div>
      <input
        type="text"
        className="focus:ring-ring-accent w-full rounded-md border border-input bg-transparent py-2 ps-10 focus:border-transparent focus:outline-none focus:ring-2"
        placeholder="البحث..."
      />
    </div>
  );
};
export default SearchInput;
