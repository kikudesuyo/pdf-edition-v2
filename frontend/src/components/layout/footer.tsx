import GitHubIcon from "@/assets/icons/gitHubIcon";
import EmailIcon from "@/assets/icons/emailIcon";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 flex flex-col items-center justify-center gap-4 bg-slate-200 pt-8 text-center">
      <div className="flex flex-row gap-4">
        <EmailIcon size="sm" />
        <p className="text-xl font-semibold">Contact:</p>
        <a href="mailto:h.kiku1224@gmail.com" className="text-xl font-semibold">
          h.kiku1224@gmail.com
        </a>
      </div>
      <div className="flex flex-row gap-4">
        <GitHubIcon size="sm" />
        <p className="text-xl font-semibold">Github:</p>
        <a
          href="https://github.com/kikudesuyo"
          className="text-xl font-semibold"
        >
          https://github.com/kikudesuyo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
