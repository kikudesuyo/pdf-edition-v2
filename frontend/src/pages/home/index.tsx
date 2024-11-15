const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center border-4 border-blue-400 text-black">
      <div className="max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold">
          PDFファイルの編集を行えるアプリケーション
        </h1>
        <p className="mb-6 text-lg">
          あなたのPDFファイルを簡単に編集。
          <br />
          無料で利用でき、データの保存は一切行いませんので、安心してご利用いただけます。
        </p>
        <p className="mb-6 text-lg">
          無料で利用でき、データの保存は一切行いません。
          <br />
          プライバシーを守りながら、必要な編集を瞬時に行えます。
        </p>
      </div>
    </div>
  );
};

export default Home;
