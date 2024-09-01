import { LoaderIcon } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-mytheme-lightOrange/25 backdrop-blur-md"></div>
      <div className="relative z-10">
        <LoaderIcon className="h-14 w-14 animate-spin text-mytheme" />
      </div>
    </div>
  );
};

export default Loading;
