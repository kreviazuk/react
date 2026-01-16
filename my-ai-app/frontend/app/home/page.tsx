"use client";

import { HomeHeader, SearchBar, HeroBanner, NewArrivals, CategoryGrid, RecommendedList } from "@/components/home/home-parts";

export default function HomePage() {
  return (
    <div className="px-6 bg-white min-h-screen pt-2">
      <HomeHeader />
      <SearchBar />
      <HeroBanner />
      <NewArrivals />
      <CategoryGrid />
      <RecommendedList />
    </div>
  );
}
