import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import ScanlineOverlay from "@/components/ScanlineOverlay";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import ContractingModelsSection from "@/components/ContractingModelsSection";
import TechStackSection from "@/components/TechStackSection";
import ProcessSection from "@/components/ProcessSection";

export default function Home() {
  return (
    <main className="min-h-screen relative text-white">
      <ThreeBackground />
      <Navbar />
      <ScrollAnimations />
      <ScanlineOverlay />
      
      {/* Sections - Content Wrapper with proper z-index */}
      <div className="relative z-10" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <AboutSection />
          <ServicesSection />
          <SectorsSection />
        </div>
        
        <div style={{ pointerEvents: 'auto' }}>
          <ContractingModelsSection />
        </div>
        
        <section id="portfolio" className="min-h-screen flex items-center justify-center" style={{ pointerEvents: 'auto' }}>
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">الأعمال السابقة</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              مشاريع ناجحة حققت نتائج استثنائية
            </p>
          </div>
        </section>
        
        <div style={{ pointerEvents: 'auto' }}>
          <TechStackSection />
        </div>
        
        <div style={{ pointerEvents: 'auto' }}>
          <ProcessSection />
        </div>
        
        
        <section id="team" className="min-h-screen flex items-center justify-center" style={{ pointerEvents: 'auto' }}>
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">فريق العمل</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              خبراء متخصصون في مجالاتهم
            </p>
          </div>
        </section>
        
        <section id="why" className="min-h-screen flex items-center justify-center" style={{ pointerEvents: 'auto' }}>
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">لماذا نحن</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              الجودة والإبداع في كل مشروع
            </p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen flex items-center justify-center" style={{ pointerEvents: 'auto' }}>
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold mb-4">تواصل معنا</h1>
            <p className="subtext text-xl text-gray-400 max-w-2xl mx-auto">
              نحن هنا للإجابة على استفساراتك
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
