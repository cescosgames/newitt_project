import React from 'react'

const Footer = () => {
  return (
    // just our footer component, nothing fancy here, links to github is all
    <footer className="fixed bottom-0 left-0 z-20 w-full px-4 py-2 bg-coolgray border-t border-mcoolmid shadow-sm flex flex-col items-center justify-center md:gap-3 md:flex-row">
        <span className="text-sm text-mcoolwhite sm:text-center">
            <p> 2025 Made by Cesco</p>
        </span>
        <ul className="hidden items-center text-sm font-medium text-coolwhite sm:mt-0 md:block">
            <li>
                <a href="https://github.com/cescosgames" target='_blank' className="me-4 md:me-6 cursor-pointer">Github</a>
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