import Link from "next/link";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-blue-600 to-slate-700">
      <div className="container mx-auto px-5 py-16">
        {/* Hero Section */}
        <section className="mb-16 flex flex-col gap-3 text-center">
          <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl">
            PDFファイルの編集を簡単に
          </h1>
          <p className="mb-2 text-xl text-white/80">
            あなたのPDFファイルを簡単に編集
          </p>
          <p className="text-base text-white/60">
            データの保存は一切行わないので、安心してご利用いただけます
          </p>
        </section>

        {/* Features Section */}
        <section className="mx-auto mb-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {/* PDF分割カード */}
          <Link href="/split-pdf">
            <div className="group rounded-3xl border border-white/20 bg-white/95 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800">
                <svg
                  className="h-10 w-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  <path d="M16,11H8V13H16V11M16,15H8V17H16V15Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                PDFファイル分割
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                PDFファイルを1ページごとに分割。直感的な操作で素早く処理できます。
              </p>
              <button className="inline-block rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/25">
                分割を開始
              </button>
            </div>
          </Link>
          {/* PDF結合カード */}
          <Link href="/merge-pdf">
            <div className="group rounded-3xl border border-white/20 bg-white/95 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800">
                <svg
                  className="h-10 w-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  <path d="M11,15H13V17H11V15M11,7H13V13H11V7Z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                PDFファイル結合
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                複数のPDFファイルを一つにまとめて結合。順序も自由に調整できます。
              </p>
              <button className="inline-block rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-500/25">
                結合を開始
              </button>
            </div>
          </Link>
        </section>

        {/* Security Section */}
        <section className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.4 16,13V16C16,16.6 15.6,17 15,17H9C8.4,17 8,16.6 8,16V13C8,12.4 8.4,11.5 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z" />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-semibold text-white">
            完全にプライベート & セキュア
          </h2>
          <p className="leading-relaxed text-white/80">
            ファイルの保存は一切行われません。
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
