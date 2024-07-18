import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[100vh] flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center px-4">
        <Image
          src={'/assets/logo.svg'}
          alt="Logo da psicóloga Eliane Alano"
          width={410}
          height={258}
        />
        <h1 className="font-poppins font-bold text-4xl text-primary mt-8 text-center">Em construção</h1>
      </div>
    </main>
  );
}
