import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white py-20 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-4xl font-black tracking-tighter italic">DILSHAJ INFOTECH.</div>
                <div className="text-zinc-500 text-sm">
                    © {new Date().getFullYear()} All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer