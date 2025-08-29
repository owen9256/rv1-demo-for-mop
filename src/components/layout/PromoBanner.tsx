import { AlertTriangle } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="bg-warning-background border-b px-6 py-2">
      <div className="flex items-center justify-center space-x-2 text-sm">
        <AlertTriangle className="w-4 h-4 text-warning" />
        <span className="text-warning-foreground">
          <span className="font-medium">🚀 kimi-k2-turbo-preview</span> 输出速度已提至 60tokens/s，最高可达 100tokens/s，
          <a href="#" className="underline hover:no-underline ml-1">
            限时促销中
          </a>
          ，快来体验吧！
        </span>
      </div>
    </div>
  );
};

export default PromoBanner;