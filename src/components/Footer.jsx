import React from 'react'

const Footer = () => {
  return (
    // just our footer component, nothing fancy here, links to github is all
    <footer className="fixed bottom-0 left-0 z-20 w-full px-4 bg-coolgray border-t border-mcoolmid shadow-sm flex justify-center gap-5">
        <span className="text-sm text-mcoolwhite sm:text-center">
            <p> 2025 Made by Cesco</p>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-coolwhite sm:mt-0">
            <li>
                <a href="#" className="me-4 md:me-6 cursor-pointer">github</a>
            </li>
            {/* <li>
                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li> */}
        </ul>
    </footer>

  )
}

export default Footer