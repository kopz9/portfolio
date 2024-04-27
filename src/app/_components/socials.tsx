import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  return (
    <>
      <h1 className="mt-8 text-center text-3xl font-semibold">
        Onde me encontrar?
      </h1>
      <div className="flex justify-center gap-12">
        <div className="mt-14">
          <Link href="https://github.com/kopz9" target="_blank">
            <Image
              src="/github_logo.png"
              alt="github"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="mt-16">
          <Link
            href="https://www.linkedin.com/in/gustavo-eduardo09/"
            target="_blank"
          >
            <Image
              src="/linkedin_icon.webp"
              alt="github"
              width={90}
              height={100}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
