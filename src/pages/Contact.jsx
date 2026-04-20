import ContactComponent from "../components/Contact";
import SEO from "../components/SEO";

export default function Contact({ data }) {
  return (
    <main className="page-wrapper">
      <SEO 
        title="İletişim & Randevu" 
        description={data.sectionDescription} 
      />
      <div>
        <ContactComponent data={data} />
      </div>
    </main>
  );
}
