import './globals.css'

export const metadata = {
  title: 'Allan Batac - Tech Leader & Full-Stack Portfolio',
  description: 'Allan Batac\'s portfolio showcasing 25+ years of experience in tech leadership and web application development, including expertise in cloud platforms, LAMP/MERN stacks, UI/UX, CMS, and emerging AI technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
