import PortfolioComponent from "../components/Portfolio";
import SEO from "../components/SEO";

export default function Portfolio({ data }) {
  return (
    <main className="page-wrapper">
      <SEO 
        title="Projelerim & Referanslar" 
        description={data.sectionDescription} 
      />
      <div>
        <PortfolioComponent data={data} />
      </div>
    </main>
  );
}
