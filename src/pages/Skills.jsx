import SkillsComponent from "../components/Skills";
import SEO from "../components/SEO";

export default function Skills({ data }) {
  return (
    <main className="page-wrapper">
      <SEO 
        title="Yetenekler & Teknoloji Yığınım" 
        description={data.sectionDescription} 
      />
      <div>
        <SkillsComponent data={data} />
      </div>
    </main>
  );
}
