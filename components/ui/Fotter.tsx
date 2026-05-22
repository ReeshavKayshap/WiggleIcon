import Link from "next/link";

function Footer() {
  return (
    <footer className="my-12">
      <div className="flex justify-center items-center">
        <p className="text-lg text-center md:text-xl text-neutral-500 dark:text-neutral-400 font-sans">
          Built by{" "}
          <Link
            href="https://x.com/rshvkyp"
            target="_blank"
            className="text-neutral-900 dark:text-neutral-200 underline decoration-[1.5px] decoration-dotted underline-offset-3 "
          >
            Reeshav
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/ReeshavKayshap/WiggleIcon"
            target="_blank"
            className="text-neutral-900 dark:text-neutral-200 underline decoration-[1.5px] decoration-dotted underline-offset-3"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
