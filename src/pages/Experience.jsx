import ExperienceComponent from "../components/Experience";
import SEO from "../components/SEO";

export default function Experience({ data }) {
  return (
    <main className="page-wrapper">
      <SEO 
        title="Deneyim & Eğitim" 
        description="Fahri Uyar - Özgeçmiş, deneyim ve eğitim bilgileri." 
      />
      <div>
        <ExperienceComponent data={data} />
      </div>
    </main>
  );
}
