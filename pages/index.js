import Head from "next/head";
import { Inter } from "@next/font/google";
import RedesigningRooms from "../components/RedesigningRooms";
import Famousity from "../components/Famousity";
import HowItWorks from "../components/HowItWorks";
import BuyRoomGPT from "../components/BuyRoomGPT";
import CoolImage from "../components/CoolImage";
import TransFormRoom from "../components/TransFormRoom";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>roomGpt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mt-3">
        <div className={`min-h-screen`}>
          <RedesigningRooms></RedesigningRooms>
          <Famousity></Famousity>
          <HowItWorks></HowItWorks>
          <BuyRoomGPT></BuyRoomGPT>
          <CoolImage></CoolImage>
          <TransFormRoom></TransFormRoom>
          <Footer></Footer>
        </div>
      </main>
    </>
  );
}
