"use client";
import Link from "next/link";
import links from "../services/navLinks";

export default function Header() {
  return (
    <div className="py-8 px-8 mx-auto max-w-xl lg:py-6 text-white">
      <div className=" text-center">
        <h2 className="mb-5 text-5xl font-extrabold text-white tracking-tight">
          The best movie{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-sky-950">
            comparator
          </span>{" "}
          ever
        </h2>
      </div>
      <ul className="flex flex-col items-center justify-between  w-full text-center md:flex-row h-20">
        {links.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
