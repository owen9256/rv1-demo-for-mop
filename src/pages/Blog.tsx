import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Search, Calendar, Tag } from "lucide-react";
import Header from "@/components/layout/Header";

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  // Set filter based on URL path
  useEffect(() => {
    if (location.pathname.includes("/whats-new")) {
      setActiveFilter("whats-new");
    } else if (location.pathname.includes("/newsletters")) {
      setActiveFilter("newsletters");
    } else {
      setActiveFilter("all");
    }
  }, [location.pathname]);

  const blogPosts = [
    {
      id: 1,
      title: "Kimi K2 又又又提速了",
      description: "经过工程师们的不懈努力，kimi-k2-turbo-preview 模型输出速度已经提升至每秒 60 Tokens，最高可达每秒 100 Tokens。目前仍然享受 5 折特惠价格。",
      date: "2025年08月22日",
      category: "whats-new",
      tags: ["K2", "性能优化", "提速"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Kimi 开放平台：新功能发布记录",
      description: "本章节记录 Kimi 开放平台的产品功能和对应的文档动态，包括 Kimi K2 高速版模型发布、i18n forum 论坛上线、Kimi Playground 正式发布等重要更新。",
      date: "2025年08月21日",
      category: "whats-new",
      tags: ["开放平台", "更新日志", "功能发布"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Kimi K2 高速版发布",
      description: "kimi-k2-turbo-preview 是 kimi-k2 的高速版，模型参数与 kimi-k2 一致，但输出速度由每秒 10 Tokens 提升至每秒 40 Tokens。目前限时 5 折特惠。",
      date: "2025年08月01日",
      category: "whats-new",
      tags: ["K2", "高速版", "发布"],
      image: "https://platform.moonshot.cn/blog/_next/image?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2F%E7%99%BD%E8%89%B2%E5%85%AC%E4%BC%97%E5%8F%B7.459ee261.png&w=3840&q=75"
    },
    {
      id: 4,
      title: "Kimi Playground 一站式体验 Kimi K2 的工具调用能力",
      description: "Kimi Playground 正式发布，为开发者带来便捷的工具调用能力体验平台。让 AI 从单纯的对话助手升级为能够调用各种工具的智能助理。",
      date: "2025年07月17日",
      category: "whats-new",
      tags: ["Playground", "工具调用", "开发者"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Kimi K2: Open Agentic Intelligence",
      description: "Kimi K2 是我们最新的专家混合模型，拥有 320 亿激活参数和 1 万亿总参数。在非思考模型中，它在前沿知识、数学和编程方面达到了最先进的性能。",
      date: "2025年07月11日",
      category: "newsletters",
      tags: ["K2", "开源", "AI模型"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Kimi 长思考模型 API 正式发布",
      description: "kimi-thinking-preview 模型是月之暗面提供的具有多模态推理能力和通用推理能力的多模态思考模型，擅长深度推理，帮助解决更多更难的问题。",
      date: "2025年05月06日",
      category: "newsletters",
      tags: ["思考模型", "API", "推理"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 7,
      title: "使用 Unreal5 游戏引擎和 Kimi 大模型开发交互式游戏",
      description: "结合 AIGC 技术，我们可以快速扩充游戏角色的对白，构建出一个更加生动的西游世界。使用 cpp 版本的 OpenAI SDK 可以在原生 cpp 的基础上调用 Kimi 大模型。",
      date: "2024年09月02日",
      category: "newsletters",
      tags: ["游戏开发", "Unreal5", "AIGC"],
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 8,
      title: "Context Caching 降价通知",
      description: "Cache 存储费用由 10元/M token/分钟，降低至 5 元/M token/分钟。价格生效时间：2024年8月7日 00:00:00。",
      date: "2024年08月07日",
      category: "whats-new",
      tags: ["价格调整", "Cache", "降价"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Kimi 企业级 API 正式发布",
      description: "Kimi 企业级 API 正式发布，为企业级用户提供更高等级的数据安全保障、更高等级的并发速率、专属技术支持服务和下一代模型/新能力优先体验。",
      date: "2024年08月02日",
      category: "whats-new",
      tags: ["企业级", "API", "发布"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = activeFilter === "all" || post.category === activeFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = [
    { id: "all", label: "所有内容", count: blogPosts.length },
    { id: "whats-new", label: "功能更新", count: blogPosts.filter(p => p.category === "whats-new").length },
    { id: "newsletters", label: "News letters", count: blogPosts.filter(p => p.category === "newsletters").length }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            我们的博客
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            了解 Moonshot AI 的技术进展、产品更新和行业洞察
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">文章</h2>
          
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="搜索文章..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  {filter.label} ({filter.count})
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="h-3 w-3 text-muted-foreground" />
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <Badge variant={post.category === "whats-new" ? "default" : "outline"}>
                      {post.category === "whats-new" ? "功能更新" : "News letters"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">未找到匹配的文章</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;