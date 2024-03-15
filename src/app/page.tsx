import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Link href="/users">
          <button className=" border-2 border-black p-4 rounded-xl">
            Go Users
          </button>
        </Link>
      </div>
    </main>
  );
}
