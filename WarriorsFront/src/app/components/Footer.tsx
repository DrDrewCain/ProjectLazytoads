import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full text-center text-gray-600 text-sm mt-10">
    <p className="text-center">
      &copy; {new Date().getFullYear()} Lazytoads. All rights reserved.
    </p>
  </footer>
  )
}

export default Footer
