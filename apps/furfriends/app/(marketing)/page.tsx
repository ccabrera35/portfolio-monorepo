import Logo from "components/logo";
import { Button } from "components/ui/button";
import Image from "next/image";
import Link from "next/link";
import snapshot from "../../public/fur-friends.png"
// "../../../public/fur-friends.png"

export default function Home() {
  return (
    <main className="bg-[#B3B8FF] min-h-screen flex flex-col xl:flex-row items-center sm:justify-center gap-10">
      <Image src={snapshot} alt="Preview of FurFriends" width={519} height={472} className="rounded-lg sm:w-[519px] sm:h-[472px] h-72 w-80 mt-10 sm:m-0"/>
      <div className="max-w-[300px] sm:max-w-[600px]">
        <Logo />
        <h1 className="text-3xl sm:text-5xl font-semibold my-6 sm:max-w-[500px]">
          Manage your <span className="font-extrabold">pet daycare</span> with
          ease
        </h1>
        <p className="text-lg sm:text-2xl font-medium sm:max-w-[600px]">
          Use FurFriends to easily keep track of pets under your care. Get lifetime
          access for $299.
        </p>
        <div className="flex justify-center sm:justify-start mt-10 space-x-3">
          <Button asChild>
            <Link href="/signup">Get started</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
