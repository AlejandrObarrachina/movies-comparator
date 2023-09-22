import LogInButton from "./LogInButton";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className="">
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-evenly p-4  border-solid border-white">
        <h2 className="mb-5 text-5xl font-extrabold tracking-tight">
          The best movie <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-sky-950">
            comparator{" "}
          </span>
          ever
        </h2>
        <LogInButton />
      </div>
      <NavBar />
    </div>
  );
}
