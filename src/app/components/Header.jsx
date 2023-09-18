"use client";
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
            <a
              href={route}
              className="uppercase relative cursor-pointer overflow-hidden group"
            >
              <p className="leading-loose hover:text-cyan-500 transition duration-300">
                {label}
              </p>
              <div className=" absolute bottom-0 right-full group-hover:translate-x-full duration-300 h-[1.5px] w-full bg-slate-500"></div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
