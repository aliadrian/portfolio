import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import Countries from "public/project/countries.jpg";
import Dictionary from "public/project/dictionary.webp";
import FactoryMethodDesignPattern from "public/project/factory-method-design-pattern-.webp";

export const metadata: Metadata = {
  title: "Projects | Adrian Nasrat",
  description: "My toolbox. This is projects I actually own and recommend.",
  openGraph: {
    title: "Projects | Adrian Nasrat",
    description: "My toolbox. This is projects I actually own and recommend.",
    type: "website",
    url: "https://a-n.io/projects",
    images: [{ url: "https://a-n.io/api/og?title=Projects", alt: "projects" }],
  },
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string | null;
}

const Item = ({ title, description, image, link }: ItemProps) => (
  <li className="flex items-center gap-4 transition-opacity">
    <Link
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl border border-secondary bg-tertiary shadow-sm"
      href={link || "#"}
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        fill
      />
    </Link>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <Link
          className={`ml-auto block h-fit rounded-full bg-tertiary px-4 py-1 text-center text-sm ${
            link ? "cursor-pointer" : "cursor-default text-stone-400"
          }`}
          href={link || "#"}
        >
          {link ? "Visit" : "Coming Soon"}
        </Link>
      </div>
    </div>
  </li>
);

export default function Projects() {
  const categories = projects.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex animate-in flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
              Projects
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              My Projects.
            </p>
          </div>
          <p
            className="max-w-md animate-in text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Explore the diverse range of projects I&apos;ve worked on,
            showcasing my skills in software development, design, and
            problem-solving. Each project reflects my dedication to creating
            innovative and functional solutions.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul
              className={`animated-list grid gap-x-6 gap-y-8  ${projects.filter((item) => item.category === category).length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"}`}
            >
              {projects.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}

const projects = [
  {
    name: "Countries",
    category: "Website",
    description: "Web app displaying country data with a theme switcher.",
    image: Countries,
    link: "/projects/countries",
  },
  {
    name: "Dictionary",
    category: "Website",
    image: Dictionary,
    description: "Web app for searching word definitions and more.",
    link: "/projects/dictionary",
  },
  {
    name: "Personal Register",
    category: "App",
    image: "https://static.cdnlogo.com/logos/c/27/c.svg",
    description: "A digital registry supporting CRUD operations made in C#.",
    link: null,
  },
];
