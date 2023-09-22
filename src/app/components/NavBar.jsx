import links from "../services/navLinks";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex flex-col items-center justify-evenly w-full text-center md:flex-row h-20">
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
    </nav>
  );
}
