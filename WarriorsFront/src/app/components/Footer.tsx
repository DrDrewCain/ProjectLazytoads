import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center w-full h-16 bg-max-w-5xl">
      <p className="text-max-w-5xl-600">
        &copy; {currentYear} Lazytoads.org. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
