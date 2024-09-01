import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Chat } from '@/constants/data';
import { MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';
const Separator = dynamic(() =>
  import('@/components/ui/separator').then((module) => module.Separator)
);

const ChatBox = ({ activeChat }: { activeChat: Chat }) => {
  const { name, message, date, seen } = activeChat;
  return (
    <Card className="flex-[2] border-mytheme-green/30 p-4 shadow-md lg:px-10">
      <h3 className="flex items-center gap-1">{name}</h3>
      <div className="mx-2 mt-2 flex w-fit items-center gap-x-1 rounded-md bg-mytheme-lightOrange/60 px-2 py-1">
        <MapPin className="h-4 w-4" />
        مصر
      </div>

      <Separator className="my-4" />
      <div className="h-[30dvh]"></div>
      <Separator className="my-4" />

      <form className="flex w-full flex-col gap-y-4 ">
        <textarea
          name="message"
          id="message"
          className="min-h-20 resize-none rounded-lg border p-2 outline-none focus:border-mytheme/60 focus:ring-mytheme/60"
        ></textarea>

        <Button className="ms-auto" type="submit">
          أرسل
        </Button>
      </form>
    </Card>
  );
};
export default ChatBox;
