import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-pokemon-red font-mono text-slate-800">
        <div className="mx-auto max-w-[50vh] max-h-[25vh] w-full flex gap-6 mb-4 p-4 relative">
          <div className="rounded-full h-32 w-32  border-solid border-8 border-black overflow-clip">
            <div className="w-full h-full bg-pokemon-blue animate-pulse"></div>
          </div>
          <div className="rounded-full h-4 w-4 bg-pokemon-red shadow-thick"></div>
          <div className="rounded-full h-4 w-4 bg-pokemon-yellow shadow-thick"></div>
          <div className="rounded-full h-4 w-4 bg-pokemon-green shadow-thick"></div>
        </div>
        <div className="p-4">
          <main className="relative mx-auto max-h-[50vh] aspect-square border-solid border-[40px] border-pokemon-almond bg-pokemon-almond rounded-md rounded-bl-[30px] shadow-thick">
            <div className="bg-sky-200 p-2 rounded-md border-4 border-black overflow-y-auto overflow-x-hidden aspect-square max-h-[50vh]">
              {children}
            </div>
            <div className="overflow-hidden aspect-square max-h-[50vh] absolute top-0 bottom-0 left-0 right-0 pointer-events-none border-4 border-black rounded-md">
              <div className="bg-white opacity-30 h-4 w-full pointer-events-none top-0 absolute rotate-[-40deg] left-[-60px]"></div>
              <div className="bg-white opacity-40 h-8 w-full pointer-events-none top-[30px] absolute rotate-[-40deg] left-[-60px]"></div>
              <div className="bg-white opacity-30 h-4 w-full pointer-events-none top-[80px] absolute rotate-[-40deg] left-[-60px]"></div>
            </div>
          </main>
          <nav className="mx-auto max-w-[50vh] max-h-[25vh] w-full flex gap-4">
            <div className="rounded-full h-16 w-16 bg-slate-700 mt-8 shadow-thick">
              <Link className="w-full h-full block" href="/"><span className="sr-only">Home</span></Link>
            </div>
          </nav>
        </div>
      </body>
    </html>
  )
}
