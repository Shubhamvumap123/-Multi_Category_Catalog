import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-sans text-slate-100">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-white/10 transform transition-all hover:scale-[1.02] duration-300">
        <div className="p-8 text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center ring-1 ring-purple-500/50 mb-6">
            <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Vite + React
          </h1>
          
          <p className="text-slate-400 text-lg">
            Tailwind CSS v4 is perfectly configured and ready to build something amazing!
          </p>

          <div className="pt-4">
            <button
              onClick={() => setCount((c) => c + 1)}
              className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white transition-all duration-200 bg-purple-600 border border-transparent rounded-xl hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 focus:ring-offset-slate-900 shadow-lg shadow-purple-500/30 w-full"
            >
              <span className="mr-2">Click to increment:</span>
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
                {count}
              </span>
            </button>
          </div>
        </div>
        <div className="bg-slate-900/50 p-4 text-center border-t border-white/5 text-sm text-slate-500">
          Edit <code className="text-purple-400 bg-purple-400/10 px-1.5 py-0.5 rounded">src/App.jsx</code> to test HMR
        </div>
      </div>
    </div>
  )
}

export default App
