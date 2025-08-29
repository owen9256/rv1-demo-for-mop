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
      description: "我们持续优化 Kimi K2 模型性能，为用户提供更快、更智能的AI体验。了解最新的技术突破和性能提升。",
      date: "2025年08月22日",
      category: "whats-new",
      tags: ["K2", "性能优化"],
      image: "https://platform.moonshot.cn/blog/_next/image?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2F%E7%99%BD%E8%89%B2%E5%85%AC%E4%BC%97%E5%8F%B7.459ee261.png&w=3840&q=75"
    },
    {
      id: 2,
      title: "Kimi 开放平台：新功能发布记录",
      description: "查看开放平台的最新功能更新，包括API改进、新工具发布和开发者体验优化。",
      date: "2025年08月21日",
      category: "whats-new",
      tags: ["开放平台", "更新"],
      image: "https://platform.moonshot.cn/blog/_next/image?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2F%E7%99%BD%E8%89%B2%E5%85%AC%E4%BC%97%E5%8F%B7.459ee261.png&w=3840&q=75"
    },
    {
      id: 3,
      title: "Kimi K2 高速版发布",
      description: "全新的 Kimi K2 高速版正式发布，带来前所未有的处理速度和响应时间。",
      date: "2025年08月01日",
      category: "whats-new",
      tags: ["K2", "发布"],
      image: "https://platform.moonshot.cn/blog/_next/image?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2F%E7%99%BD%E8%89%B2%E5%85%AC%E4%BC%97%E5%8F%B7.459ee261.png&w=3840&q=75"
    },
    {
      id: 4,
      title: "AI 技术趋势：2025年展望",
      description: "探索人工智能领域的最新趋势，分析技术发展方向和未来机遇。",
      date: "2025年07月25日",
      category: "newsletters",
      tags: ["趋势分析", "AI"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "开发者生态建设进展",
      description: "Moonshot AI 致力于构建强大的开发者生态系统，为全球开发者提供最优质的AI工具和服务。",
      date: "2025年07月20日",
      category: "newsletters",
      tags: ["生态", "开发者"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Kimi Playground 一站式体验",
      description: "全新的 Kimi Playground 让您能够一站式体验 Kimi K2 的强大工具调用能力。",
      date: "2025年07月17日",
      category: "whats-new",
      tags: ["Playground", "工具"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
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