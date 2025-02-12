import Brand from "@/components/home/brand/Brand";
import MyCarousel from "@/components/home/carousel/MyCarousel";
import Header from "@/components/home/header/Header";
import Recommanded from "@/components/home/recommended/Recommanded";

export default function Home() {
  return (
    <div className="w-full">
      <div className="w-full sticky inset-0 backdrop-blur-md bg-opacity-90 z-20">
        <Header />
        <Brand />
      </div>
      <MyCarousel />
      <Recommanded />
    </div>
  );
}
