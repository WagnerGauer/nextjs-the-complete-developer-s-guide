import Image from "next/image";
import scaleImg from "public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steal Factory"
      title="Scale Your App for Infinity"
    />
  );
}
