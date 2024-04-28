import Image from "next/image";
import Link from "next/link";

export type CardProps = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export default function Card({ title, description, link, image }: CardProps) {
  return (
    <>
      <div className="w-96 shadow-xl">
        <figure>
          <Link href={link}>
            <Image src={image} alt={title} width={400} height={200} />
          </Link>
        </figure>
        <div className="">
          <h2 className="">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
