import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import TableOfContents from "@/components/layout/TableOfContents";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";

const Documentation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Moonshot AI API 开发文档",
    "description": "完整的Moonshot AI大语言模型API开发文档，包含快速开始、API参考、示例代码等内容。",
    "publisher": {
      "@type": "Organization",
      "name": "Moonshot AI"
    },
    "author": {
      "@type": "Organization",
      "name": "Moonshot AI"
    }
  };

  return (
    <>
      <SEOHead 
        title="API 开发文档 - Moonshot AI"
        description="完整的Moonshot AI大语言模型API开发文档，包含快速开始、API参考、示例代码和最佳实践。助力开发者快速集成AI能力。"
        keywords="Moonshot AI API, 开发文档, API参考, 快速开始, 示例代码, 开发者指南"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <PromoBanner />
        <Header />
        <main className="flex flex-1 overflow-hidden" role="main">
          <Sidebar />
          <MainContent />
          <TableOfContents />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Documentation;