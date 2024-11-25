"use client";

import { Text } from "@yamada-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-black">
      <div className="flex max-w-3xl flex-col gap-12 text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          PDFファイルの編集を簡単に
        </h1>
        <div>
          <Text className="mb-6 text-2xl font-semibold">
            あなたのPDFファイルを簡単に編集
          </Text>
          <Text className="mb-6 text-xl font-semibold">
            データの保存は一切行わないので、安心してご利用いただけます。
          </Text>
        </div>
        <div className="flex flex-row items-center justify-center gap-12">
          <Link href="/split-pdf">
            <p className="rounded-md bg-red-500 p-4 text-2xl font-bold text-white">
              PDFファイル分割
            </p>
          </Link>
          <Link href="/merge-pdf">
            <p className="rounded-lg bg-red-500 p-4 text-2xl font-bold text-white">
              PDFファイル結合
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
