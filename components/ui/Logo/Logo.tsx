import React from 'react'

function Logo({ className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width="40"
      height="40"
      className={className}
      {...props}
    >
      <path d="M6.6 51.32c0-1.18.4-2.16 1.19-2.95.79-.78 1.78-1.18 2.96-1.18 1.19 0 2.16.37 2.94 1.1.77.73 1.16 1.64 1.16 2.72 0 1.21-.41 2.2-1.24 2.96a4.19 4.19 0 01-2.94 1.14c-1.2 0-2.17-.36-2.91-1.09-.74-.72-1.13-1.62-1.16-2.7zm31.72-14.93l-9.2 12.27h12.31l-1.11 6.15H18.43l.72-4.15 11.38-14.77-6.23-14.42.64-3.49h21.53l-1.11 6.2H33.14l5.2 11.81-.02.4zm34.17-12.22H63.5l-5.41 30.64h-7.42l5.41-30.64h-8.86l1.11-6.2H73.6l-1.11 6.2z"></path>
    </svg>
  )
}

export default Logo

// const Logo = ({ className = '', ...props }) => (
//   <svg
//     width="32"
//     height="32"
//     viewBox="0 0 32 32"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     className={className}
//     {...props}
//   >
//     <rect width="100%" height="100%" rx="16" fill="var(--secondary)" />
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
//       fill="var(--primary)"
//     />
//   </svg>
// )

// export default Logo
