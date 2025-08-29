import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import Homepage from "@/components/layout/Homepage";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Moonshot AI",
    "url": "https://platform.moonshot.cn/",
    "description": "Moonshot AI提供先进的大语言模型API服务，支持对话、代码生成、内容创作、多模态理解。",
    "publisher": {
      "@type": "Organization",
      "name": "Moonshot AI"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://platform.moonshot.cn/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead 
        title="Moonshot AI - 强大的大语言模型API服务"
        description="Moonshot AI提供先进的文本生成模型API服务，支持对话、代码生成、内容创作、多模态理解。高性能、易集成、安全可靠的大语言模型解决方案。"
        keywords="Moonshot AI, 大语言模型, API服务, 文本生成, 人工智能, AI模型, 代码生成, 内容创作, 多模态, Kimi"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <PromoBanner />
        <Header />
        <main>
          <Homepage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
