import Header from "@/components/layout/Header";
import PromoBanner from "@/components/layout/PromoBanner";
import Homepage from "@/components/layout/Homepage";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PromoBanner />
      <Header />
      <Homepage />
    </div>
  );
};

export default Index;
