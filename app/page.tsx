import Banner from "@/components/Banner";
import { connect } from "@/utils/dbConnect/dbConnect";

export default async function Home() {
  const dbConnection = await connect();
  //console.log(dbConnection);
  return (
    <>
      <main>
        <Banner 
          title="Explore!"
          description="Guitar magazine collection from 80s, 90s, and 2000s."
          imageSrc="/myguitarmags-stacks.jpg"
          imageAlt="Photo of stacked guitar magazines"
        />
      </main>
    </>
  );
}
