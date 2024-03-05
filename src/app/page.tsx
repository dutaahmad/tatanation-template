import DiceCube from "@/components/dice-cube";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <div className="flex items-center justify-evenly gap-8 min-h-[80vh] w-[80%] m-auto">
        <div className="w-[40%] flex flex-col items-center justify-center">
          <h1 className="font-bold
                    text-4xl
                    font-inter
                    sm:text-5xl
                    md:text-7xl whitespace-normal
                    bg-clip-text
                    ">
            Tatanation Stack
          </h1>
          <Separator className="my-4" decorative />
          <div className="flex gap-4 items-center justify-evenly w-[40rem]">
            <h2>
              ShadcnUI
            </h2>
            <Separator orientation="vertical" decorative />
            <h2>
              SWR
            </h2>
            <Separator orientation="vertical" decorative />
            <h2>
              Zod
            </h2>
            <Separator orientation="vertical" decorative />
            <h2>
              Supabase
            </h2>
          </div>
        </div>
        <Separator orientation="vertical" decorative />
        <div className="bg-red-500" >
          <DiceCube />
        </div>
      </div>
    </main>
  );
}
