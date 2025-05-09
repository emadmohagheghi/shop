'use client';
import { HomeOffers } from './_components/home-offers';
import { HomeSlider } from './_components/home-slider';


export default function Home() {
  return (
    <>
      <div className="w-full">
        <HomeSlider />
        <HomeOffers />
      </div>
    </>
  );
}
