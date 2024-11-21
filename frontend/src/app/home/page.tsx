"use client";

import { Text } from "@yamada-ui/react";
import { mergePdf } from "@/service/api";

const Home = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-black">
      <div className="max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          PDFファイルの編集を簡単に
        </h1>
        <p className="mb-6 text-lg">
          あなたのPDFファイルを簡単に編集。
          <br />
          無料で利用でき、データの保存は一切行いませんので、安心してご利用いただけます。
        </p>
        <div>
          <Text>機能一覧</Text>
          <ul>
            <li>PDFファイルの結合</li>
            <li>PDFファイルの分割</li>
            <li>Coming soon...</li>
          </ul>
        </div>
        <button
          className="mt-8 rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg hover:bg-blue-600"
          onClick={mergePdf}
        >
          PDFファイルを結合する
        </button>
      </div>
    </div>
  );
};

export default Home;
