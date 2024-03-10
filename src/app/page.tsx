import DiceCube from "@/components/dice-cube";
import { Separator } from "@/components/ui/separator";
import supabase from "@/lib/supabase";
import Link from "next/link";

// async function getDice() {
//   "use server";
//   const modelUrl = supabase.storage
//     .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET!)
//     .getPublicUrl("dice-001.fbx");
//   return modelUrl;
// }

export default async function Home() {
  const diceURL = "https://teyxwtyylywkvgbzwhoe.supabase.co/storage/v1/object/public/tatanation-nextjs-template/scene.gltf?t=2024-03-09T16%3A25%3A27.258Z"
  const cubeURL = '/CUBE.gltf'
  return (
    <main className="w-full min-h-screen">
      <div className="flex items-center justify-evenly gap-8 h-screen m-auto">
        <div className="w-[40%] flex flex-col items-center justify-center">
          <h1
            className="font-bold
                    text-4xl
                    font-inter
                    sm:text-5xl
                    md:text-7xl whitespace-normal
                    bg-clip-text
                    "
          >
            Tatanation Stack
          </h1>
          <Separator className="my-4" decorative />
          <div className="flex gap-4 items-center justify-evenly w-[40rem]">
            <h2>ShadcnUI</h2>
            <Separator orientation="vertical" decorative />
            <h2>SWR</h2>
            <Separator orientation="vertical" decorative />
            <h2>Zod</h2>
            <Separator orientation="vertical" decorative />
            <h2>Supabase</h2>
          </div>
        </div>
        <Separator orientation="vertical" decorative />
        <div className="w-[40%] h-full">
          <DiceCube modelURL={diceURL} />
          {/* <DiceCube dice /> */}
        </div>
      </div>
    </main>
  );
}
