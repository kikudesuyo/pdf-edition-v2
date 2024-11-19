const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-blue-400 text-black">
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
          <p>機能一覧</p>
          <ul>
            <li>PDFファイルの結合</li>
            <li>PDFファイルの分割</li>
            <li>Coming soon...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
