export default function LogInButton() {
  return (
    <a
      href="/login"
      className="
			 relative inline-flex h-8 overflow-hidden rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 group transition"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
      <span
        className="
					text-sm px-3 py-1
					false

				inline-flex items-center justify-center w-full h-full font-medium text-white rounded-full cursor-pointer group-hover:text-sky-100 bg-slate-950 group-hover:bg-black backdrop-blur-3xl"
      >
        Log in
      </span>
    </a>
  );
}
