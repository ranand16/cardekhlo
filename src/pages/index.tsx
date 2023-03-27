import Head from "next/head";
import { Inter } from "next/font/google";
import { AppConfig } from "@/utility/Constants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>{AppConfig.title}</title>
        <meta name="description" content="{AppConfig.title}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      </main>
    </>
  );
}
