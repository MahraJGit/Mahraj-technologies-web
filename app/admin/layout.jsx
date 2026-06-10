export const metadata = {
  title: 'Sanity Studio',
  description: 'Sanity Studio Admin Dashboard',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
