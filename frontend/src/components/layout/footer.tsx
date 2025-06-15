import GitHubIcon from "@/assets/icons/gitHubIcon";
import EmailIcon from "@/assets/icons/emailIcon";

const Footer = () => {
  return (
    <footer className="border-t border-slate-600/50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <div className="flex flex-col items-center gap-6">
          {/* メインコンテンツ */}
          <div className="grid w-full max-w-2xl grid-cols-1 gap-6 md:grid-cols-2">
            {/* メール */}
            <a
              className="group flex items-center gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10"
              href="mailto:h.kiku1224@gmail.com"
            >
              <div className="rounded-lg bg-blue-500/20 p-2 transition-all group-hover:bg-blue-500/30">
                <EmailIcon size="xs" color="blue" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-300">Contact</p>
                <p className="truncate text-xs font-semibold text-white">
                  h.kiku1224@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              className="group flex items-center gap-3 rounded-lg bg-white/5 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/10"
              href="https://github.com/kikudesuyo/pdf-edition-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-lg bg-slate-500/20 p-2 transition-all group-hover:bg-slate-500/30">
                <GitHubIcon size="xs" color="gray" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-300">GitHub</p>
                <p className="truncate text-xs font-semibold text-white">
                  kikudesuyo/pdf-edition-v2
                </p>
              </div>
            </a>
          </div>

          <div className="w-full border-t border-slate-600/30 pt-6">
            <div className="text-center text-xs text-slate-500">
              <p>2025 PDF Tools. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for easy PDF editing</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
