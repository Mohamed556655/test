import { Chat } from '@/constants/data';
import { cn } from '@/lib/utils';
import { formatDistance } from 'date-fns';
import { ar } from 'date-fns/locale';
import { Dot } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

interface MessagesProps {
  setActiveChat: Dispatch<SetStateAction<Chat>>;
  chat: Chat;
}

export const Messages = ({ setActiveChat, chat }: MessagesProps) => {
  const { name, message, date, seen } = chat;

  return (
    <div
      onClick={() => setActiveChat(chat)}
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-xl border p-2 transition-colors before:absolute before:right-0 before:top-0 before:h-full before:w-1.5',
        seen
          ? 'before:bg-mytheme-green hover:bg-mytheme-green/5'
          : 'before:bg-mytheme hover:bg-mytheme/5'
      )}
    >
      <h3 className="flex items-center gap-1">
        <Dot
          className={cn(
            'scale-[3]',
            seen ? 'text-mytheme-green' : 'text-mytheme'
          )}
        />
        {name}
      </h3>
      <p className="line-clamp-2 ps-7 text-sm font-light text-[#727272]">
        {message}
      </p>

      <span className="ps-7 text-xs text-[#E1DFDF]">
        {formatDistance(new Date(date), new Date(), {
          addSuffix: true,
          locale: ar
        })}
      </span>
    </div>
  );
};
