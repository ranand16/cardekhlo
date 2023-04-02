import Head from "next/head";
import { Inter } from "next/font/google";
import { AppConfig } from "@/utility/Constants";
import { Main } from "@/layout/Main";
import { Meta } from "@/layout/Meta";

export default function Home() {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    ></Main>
  );
}
