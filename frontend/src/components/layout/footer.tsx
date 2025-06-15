import GitHubIcon from "@/assets/icons/gitHubIcon";
import EmailIcon from "@/assets/icons/emailIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-slate-200 pt-2">
      <a
        className="flex flex-row items-center justify-center gap-4"
        href="mailto:h.kiku1224@gmail.com"
      >
        <EmailIcon size="xs" />
        <p className="text-xm font-semibold">Contact:</p>
        <p className="text-xm font-semibold"> h.kiku1224@gmail.com</p>
      </a>
      <a
        className="flex flex-row items-center justify-center gap-2 font-semibold"
        href="https://github.com/kikudesuyo/pdf-edition-v2"
      >
        <GitHubIcon size="xs" />
        <p className="text-xm font-semibold">Github:</p>
        <p className="text-xm font-semibold">kikudesuyo/pdf-edition-v2</p>
      </a>
    </footer>
  );
};

export default Footer;
