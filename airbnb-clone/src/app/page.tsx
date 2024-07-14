import React from "react";
import Header from "@/app/component/Header";
import Banner from "@/app/component/Banner";
import SmallCard from "@/app/component/SmallCard";
import Image from "next/image";
import MediumCard from "./component/MediumCard";
import LargeCard from "./component/LargeCard";
import Footer from "./component/Footer";

interface ExploreDataItem {
  location: string;
  img:image;
  distance: string;
}

interface CardsDataItem{
  img:image;
  title:string;
}



interface HomeProps {
  exploreData: ExploreDataItem[];
  cardsData: CardsDataItem[];
}

export async function fetchExploreData(): Promise<{exploreData:ExploreDataItem[],cardsData:CardsDataItem[] }> {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const cardsRes = await fetch('https://www.jsonkeeper.com/b/VHHT')
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  if (!cardsRes.ok) {
    throw new Error('Failed to cards data');
  }

  const exploreData = await res.json()
  const cardsData = await cardsRes.json()


  return {exploreData , cardsData};
}




export default async function HomePage() {
  const {exploreData , cardsData} = await fetchExploreData();
  return (
    <div>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from a server -API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map(({img,distance,location}) => (
            <SmallCard
            key={img}
            img={img} 
            distance={distance} 
            location={location}
            />
          ))}
          </div>
        </section>

        <section>
          
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({img , title}) => (
            <MediumCard
              key={img}
              img={img}
              title={title}
            />
          ))}
          </div>

          {/* large card */}
          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greactes Outdoors."
          description="Whislist curated by Airbnb."
          buttonText="Get Inspired"
          
          />

        </section>
      </main>

      <Footer
        
      />
    </div>
  );
}
