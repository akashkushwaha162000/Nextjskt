import Image from "next/image";

export const revalidate = 10;

export default function Home() {
  const dateTime = new Date();
  console.log("regenerate page");
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Example of ISR</h1>
      <h3>Date time is {dateTime.toString()}</h3>
    </div>
  );
}
