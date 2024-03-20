import Image from "next/image";
import { Inter } from "next/font/google";
import { SignUp } from "@/Components/Sign/SignContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <SignUp></SignUp>;
}
