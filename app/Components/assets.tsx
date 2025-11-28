import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/typeLogo.svg"
        alt="Crezant"
        className="h-10 w-10"
        width={40}
        height={40}
        priority
      />
      <span className="text-xl font-semibold">Crezant</span>
    </div>
  );
}
