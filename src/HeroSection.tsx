import { useTheme } from "./theme-context";
import { FiCode, FiPlay } from 'react-icons/fi';

type PageProps = {
    setView: (view: 'home' | 'login' | 'signup' | 'joinRoom') => void
};

export default function HeroSection({ setView }: PageProps) {
    const { darkMode } = useTheme();
    async function createRoom() {
        try {
            const response = await fetch("http://localhost:8080/create-room", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const data = await response.json();
            console.log("Room-Code:", data.roomCode);
        } catch (error) {
            console.error("Error:", error)
        }
    }
    return (
        <div className="w-full max-w-2xl my-auto text-center animate-fade-in">
            <h2 className={`text-4xl md:text-6xl font-extrabold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>Watch Together,</h2>
            <h3 className={`text-4xl md:text-6xl font-extrabold ${darkMode ? "text-cyan-400" : "text-blue-600"} mb-8`}>Perfectly in Sync.</h3>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} text-lg mb-12 max-w-xl mx-auto`}>Create a private room, invite your friends, and press play. GoParty handles the synchronization so you never miss a moment.</p>
            <button
                onClick={createRoom}
                className={`cursor-pointer ${darkMode ? "bg-cyan-500 hover:bg-cyan-600 hover:shadow-cyan-500/30" : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30"} text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out text-2xl inline-flex items-center`}
            >
                <FiPlay />
                &nbsp;Create Room
            </button>
            <br />
            <p
                onClick={() => setView('joinRoom')}
                className={`cursor-pointer bg-transparent ${darkMode ? "text-gray-400 hover:text-white" : "text-blue-600 hover:text-blue-900"} font-bold py-2 px-8 rounded-full transition-all duration-300 ease-in-out text inline-flex items-center`}
            >
                <FiCode />
                &nbsp;Join Room
            </p>
        </div>
    );
};
