"use client";
import { useSearchParams } from "next/navigation";

const HomePageClient = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const query = params.get("q");

  console.log("query", query);
  console.log("category", category);
  return <div>HomePageClient</div>;
};
export default HomePageClient;
