export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
      <div className="relative flex items-center justify-center w-24 h-24">

        {/* Circle */}
        <div className="absolute w-24 h-24 border-2 rounded-full border-violet-500 animate-ping opacity-30" />

        <div className="absolute w-24 h-24 border rounded-full border-violet-500/50" />

        {/* Logo */}
        <span className="text-3xl font-black tracking-widest text-violet-500 animate-pulse">
          Spx
        </span>

      </div>
    </div>
  );
}