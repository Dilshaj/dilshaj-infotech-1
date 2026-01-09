import React from 'react'

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-8 py-6">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="text-2xl font-black text-white tracking-tighter">DI.</div>
                <div className="flex gap-8 text-white/80 font-medium">
                    <a href="#" className="hover:text-white transition-colors">Services</a>
                    <a href="#" className="hover:text-white transition-colors">About</a>
                    <a href="#" className="hover:text-white transition-colors">Career</a>
                </div>
            </nav>
        </header>
    )
}

export default Header