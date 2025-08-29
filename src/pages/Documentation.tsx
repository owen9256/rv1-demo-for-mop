import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import TableOfContents from "@/components/layout/TableOfContents";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PromoBanner />
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
        <TableOfContents />
      </div>
    </div>
  );
};

export default Documentation;