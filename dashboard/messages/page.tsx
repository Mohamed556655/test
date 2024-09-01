'use client';
import { Icons } from '@/components/icons';
import SearchInput from '@/components/SearchInput';
import { Card } from '@/components/ui/card';
import { Chat, chats } from '@/constants/data';
import { Dot } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Messages } from './Messages';
import { useState } from 'react';
const ChatBox = dynamic(() => import('./ChatBox'));
const PageContainer = dynamic(
  () => import('@/components/layout/page-container')
);
const Heading = dynamic(() =>
  import('@/components/ui/heading').then((module) => module.default)
);
const Separator = dynamic(() =>
  import('@/components/ui/separator').then((module) => module.Separator)
);
const Tabs = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.Tabs)
);
const TabsContent = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsContent)
);
const TabsList = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsList)
);
const TabsTrigger = dynamic(() =>
  import('@/components/ui/tabs').then((module) => module.TabsTrigger)
);

const MessagePage = () => {
  const [activeChat, setActiveChat] = useState<Chat>(chats[0]);

  return (
    <PageContainer>
      <Heading className="mb-8 mt-6" title={`الرسائل`} />

      <div className="flex gap-x-10">
        <Card className="flex-1 border-mytheme-green/30 p-4 shadow-md lg:px-10">
          <h3 className="flex items-center gap-1">
            <Icons.chat className="size-5" />
            الرسائل الواردة
          </h3>

          <SearchInput className="my-4 w-auto" />

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">الكل</TabsTrigger>
              <TabsTrigger value="seen" className="text-mytheme-green">
                <Dot className="-me-1 scale-[3]" />
                مقروءة
              </TabsTrigger>
              <TabsTrigger value="notseen" className="text-mytheme">
                <Dot className="-me-1 scale-[3]" />
                غير مقروءة
              </TabsTrigger>
            </TabsList>
            <Separator className="mb-4" />

            <TabsContent value="all" className="space-y-4">
              {chats.map((chat) => (
                <Messages
                  setActiveChat={setActiveChat}
                  chat={chat}
                  key={chat.id}
                />
              ))}
            </TabsContent>
            <TabsContent value="seen" className="space-y-4">
              {chats
                .filter((chat) => chat.seen)
                .map((chat) => (
                  <Messages
                    setActiveChat={setActiveChat}
                    chat={chat}
                    key={chat.id}
                  />
                ))}
            </TabsContent>
            <TabsContent value="notseen" className="space-y-4">
              {chats
                .filter((chat) => !chat.seen)
                .map((chat) => (
                  <Messages
                    setActiveChat={setActiveChat}
                    chat={chat}
                    key={chat.id}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </Card>

        <ChatBox activeChat={activeChat} />
      </div>
    </PageContainer>
  );
};
export default MessagePage;
