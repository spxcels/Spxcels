import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();

  return (
    <header
      className="
        w-full px-8 py-4
        bg-[#0b0b0b]/80 
        backdrop-blur-xl 
        border-b border-gray-800
        shadow-lg
        flex items-center gap-3
      "
    >
      {/* ONLINE INDICATOR */}
      {user && (
        <span
          className="
            w-3 h-3 rounded-full 
            bg-green-500 
            shadow-[0_0_8px_rgba(0,255,0,0.9)]
            animate-online-pulse

            /* Fix alignment */
            relative top-[2px]
          "
        ></span>
      )}

      {/* USER EMAIL */}
      <h1
        className="
          text-2xl font-semibold 
          text-transparent  
          bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text
          drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]
        "
      >
        {user ? user.email : "Loading..."}
      </h1>

      <style>
        {`
          @keyframes onlinePulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50%      { transform: scale(1.4); opacity: 0.6; }
          }

          .animate-online-pulse {
            animation: onlinePulse 1.5s ease-in-out infinite;
          }
        `}
      </style>
    </header>
  );
}
