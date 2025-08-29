import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="font-semibold text-lg">Moonshot AI</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
              Blog
              <ChevronDown className="ml-1 h-3 w-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <a href="https://platform.moonshot.cn/blog/whats-new" className="flex cursor-pointer">
                  What's New
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <a href="https://platform.moonshot.cn/blog/newsletters" className="flex cursor-pointer">
                  Newsletters
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
            文档
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            开发工作台
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            用户中心
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;