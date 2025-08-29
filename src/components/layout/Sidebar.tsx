import { ChevronRight, ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SidebarSection {
  title: string;
  items: string[];
  expanded?: boolean;
}

const sidebarSections: SidebarSection[] = [
  {
    title: "使用手册",
    expanded: true,
    items: ["主要概念", "开始"]
  },
  {
    title: "API 文档",
    expanded: true,
    items: ["Chat", "Tool Use", "Partial Mode", "文件接口", "上下文保存"]
  },
  {
    title: "🔥 促销活动",
    items: []
  },
  {
    title: "产品定价",
    items: ["模型推理定价", "上下文保存定价", "工具定价", "充值与提现", "常见问题"]
  },
  {
    title: "人工反馈",
    items: ["从 OpenAI 迁移到 Kimi API"]
  }
];

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(
    sidebarSections.filter(section => section.expanded).map(section => section.title)
  );

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="w-64 bg-doc-sidebar border-r h-full flex flex-col">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="搜索文档..." 
            className="pl-10 bg-background"
          />
        </div>
      </div>
      
      <nav className="flex-1 px-2 pb-4">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-2">
            <Button
              variant="ghost"
              onClick={() => toggleSection(section.title)}
              className="w-full justify-between px-3 py-2 h-auto text-left font-normal hover:bg-doc-sidebar-hover"
            >
              <span className="text-sm font-medium">{section.title}</span>
              {section.items.length > 0 && (
                expandedSections.includes(section.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )
              )}
            </Button>
            
            {expandedSections.includes(section.title) && section.items.length > 0 && (
              <div className="ml-4 mt-1 space-y-1">
                {section.items.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="w-full justify-start px-3 py-1.5 h-auto text-sm font-normal text-muted-foreground hover:text-foreground hover:bg-doc-sidebar-hover"
                  >
                    {item}
                  </Button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;