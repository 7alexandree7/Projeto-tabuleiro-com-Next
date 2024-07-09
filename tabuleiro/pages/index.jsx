import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Quadrado from "./Components/Quadrado";



export default function Home() {
  
  return (
    <>
      <div className="box">
        <div className="ajuste-flex-content">
          <Quadrado />
        </div>
      </div>
    </>
  );
}
