import GitHubIcon from "@/assets/icons/GitHubIcon";
import EmailIcon from "@/assets/icons/EmailIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center text-center sticky bottom-0 bg-slate-200 gap-4 pt-8">
      <div className="flex flex-row gap-4">
        <EmailIcon size="size-8" />
        <p className="font-semibold text-xl">Contact:</p>
        <a href="mailto:h.kiku1224@gmail.com" className="font-semibold text-xl">
          h.kiku1224@gmail.com
        </a>
      </div>
      <div className="flex flex-row gap-4">
        <GitHubIcon size="size-8" />
        <p className="font-semibold text-xl">Github:</p>
        <a
          href="https://github.com/kikudesuyo"
          className="font-semibold text-xl"
        >
          https://github.com/kikudesuyo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
