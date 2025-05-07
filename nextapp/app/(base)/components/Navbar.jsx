import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import {} from ''
const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-xl border-b border-blue-900 flex flex-row align-middle items-center justify-center gap-[200px]">
            {/* title name */}
            <div className='flex flex-row gap-[10px] align-middle items-center justify-center'>
                <Link href={`/`}><Image src="/logo.jpeg" alt="logo" width={50} height={50} className='rounded-full' /></Link>
                <h1 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-green-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-md ">Food waste rescue</h1>
            </div>
            <div className='flex flex-row gap-[20px] align-middle justify-center'>
                <Link href='#'>Home</Link>
                <Link href='/pages/about'>About</Link>
                <Link href='#'>Home</Link>
                <Link href='#'>Home</Link>
            </div>
            <div className='flex flex-row gap-[10px]'>
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                {/* profile */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
