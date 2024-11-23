import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className={`text-center transform transition-all duration-1000 ${
        mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/20">
          <div className="flex justify-center mb-6">
            <Globe className="w-16 h-16 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Hello, World!
          </h1>
          <p className="text-xl text-white/80">
            Welcome to our beautiful corner of the web
          </p>
          <button 
            className="mt-8 px-6 py-3 bg-white text-purple-600 rounded-lg font-semibold
                     transform transition-all duration-200 hover:scale-105 hover:shadow-lg
                     active:scale-95"
            onClick={() => alert('Hello there! 👋')}
          >
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;