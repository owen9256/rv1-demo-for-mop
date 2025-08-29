import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "Moonshot AI 开发者活动",
    "description": "Moonshot AI举办的技术活动，包括开发者大会、技术分享会、产品发布会等。",
    "organizer": {
      "@type": "Organization",
      "name": "Moonshot AI"
    }
  };

  interface Event {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    type: string;
    status: string;
    attendees: string;
    image: string;
    tags: string[];
    recording?: string;
  }

  const upcomingEvents: Event[] = [
    {
      id: 1,
      title: "Kimi K2 开发者大会 2025",
      description: "深入了解 Kimi K2 模型的最新功能，与开发者社区共同探讨 AI 应用的未来发展方向。",
      date: "2025年09月15日",
      time: "14:00 - 18:00",
      location: "北京·中关村软件园",
      type: "conference",
      status: "报名中",
      attendees: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      tags: ["开发者大会", "K2", "AI"]
    },
    {
      id: 2,
      title: "AI 代理技术深度解析",
      description: "探索 AI 代理技术的核心原理，学习如何构建智能代理系统，提升应用的自动化水平。",
      date: "2025年09月08日",
      time: "19:00 - 21:00",
      location: "线上直播",
      type: "webinar",
      status: "即将开始",
      attendees: "1000+",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      tags: ["AI代理", "技术分享", "直播"]
    },
    {
      id: 3,
      title: "Kimi API 最佳实践分享",
      description: "分享 Kimi API 在实际项目中的应用经验，包括性能优化、错误处理和最佳实践。",
      date: "2025年09月22日",
      time: "15:00 - 17:00",
      location: "上海·张江高科技园区",
      type: "workshop",
      status: "报名中",
      attendees: "100+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["API", "最佳实践", "工作坊"]
    }
  ];

  const pastEvents: Event[] = [
    {
      id: 4,
      title: "Kimi K2 高速版发布会",
      description: "Kimi K2 高速版正式发布，输出速度提升4倍，为开发者带来更高效的AI体验。",
      date: "2025年08月01日",
      time: "14:00 - 16:00",
      location: "线上发布",
      type: "launch",
      status: "已结束",
      attendees: "2000+",
      image: "https://platform.moonshot.cn/blog/_next/image?url=%2Fblog%2F_next%2Fstatic%2Fmedia%2F%E7%99%BD%E8%89%B2%E5%85%AC%E4%BC%97%E5%8F%B7.459ee261.png&w=3840&q=75",
      tags: ["产品发布", "K2", "高速版"],
      recording: "https://example.com/recording"
    },
    {
      id: 5,
      title: "Kimi Playground 发布与演示",
      description: "Kimi Playground 正式发布，为开发者提供一站式工具调用能力体验平台。",
      date: "2025年07月17日",
      time: "16:00 - 18:00",
      location: "线上演示",
      type: "demo",
      status: "已结束",
      attendees: "1500+",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["Playground", "工具调用", "演示"],
      recording: "https://example.com/recording"
    }
  ];

  const events = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "conference": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "webinar": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "workshop": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "launch": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "demo": return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case "conference": return "开发者大会";
      case "webinar": return "在线研讨会";
      case "workshop": return "技术工作坊";
      case "launch": return "产品发布";
      case "demo": return "产品演示";
      default: return "活动";
    }
  };

  return (
    <>
      <SEOHead 
        title="开发者活动 - Moonshot AI"
        description="参加Moonshot AI举办的技术活动，包括开发者大会、在线研讨会、技术工作坊等。与开发者社区共同学习AI技术，分享最佳实践。"
        keywords="Moonshot AI活动, 开发者大会, AI技术分享, 在线研讨会, 技术工作坊"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              开发者活动
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              参加 Moonshot AI 举办的技术活动，与开发者社区共同学习和成长
            </p>
          </div>
        </section>

        {/* Content Section */}
        <main className="max-w-7xl mx-auto px-6 py-16" role="main">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary rounded-lg p-1" role="tablist" aria-label="活动分类">
              <button
                onClick={() => setActiveTab("upcoming")}
                role="tab"
                aria-selected={activeTab === "upcoming"}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "upcoming"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                即将举行
              </button>
              <button
                onClick={() => setActiveTab("past")}
                role="tab"
                aria-selected={activeTab === "past"}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === "past"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                往期活动
              </button>
            </div>
          </div>

          {/* Events Grid */}
          <section 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="tabpanel"
            aria-labelledby={activeTab === "upcoming" ? "upcoming-events" : "past-events"}
          >
            {events.map((event) => (
              <article key={event.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden bg-card rounded-lg border">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={`${event.title}活动宣传图`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className={getEventTypeColor(event.type)}>
                      {getEventTypeLabel(event.type)}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    <time className="text-sm text-muted-foreground" dateTime={event.date}>
                      {event.date}
                    </time>
                    <Badge variant={event.status === "已结束" ? "secondary" : "default"} className="ml-auto">
                      {event.status}
                    </Badge>
                  </div>
                  <h2 className="text-xl font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" aria-hidden="true" />
                      <span>{event.attendees} 参与者</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap mb-4" role="list" aria-label="活动标签">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs" role="listitem">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    {activeTab === "upcoming" ? (
                      <Button className="w-full" aria-label={`报名参加${event.title}`}>
                        立即报名
                      </Button>
                    ) : (
                      <>
                        {event.recording && (
                          <Button variant="outline" className="flex-1" aria-label={`观看${event.title}回放`}>
                            <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                            观看回放
                          </Button>
                        )}
                        <Button variant="ghost" className="flex-1" aria-label={`查看${event.title}详情`}>
                          查看详情
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </article>
            ))}
          </section>
          
          {events.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">暂无相关活动</p>
            </div>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Events;