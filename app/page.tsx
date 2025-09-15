import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner 
          title="Explore"
          description="Guitar magazine collection from 80s, 90s, and 2000s."
          imageSrc="/myguitarmags-stacks.jpg"
          imageAlt="Photo of stacked guitar magazines"
        />
      </main>
      <Footer />
    </>
  );
}
