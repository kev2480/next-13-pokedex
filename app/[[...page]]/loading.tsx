export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <section>
       <ol className="grid gap-4 grid-cols-2">
        {Array.apply(null, Array(6)).map((item, index) =>
          <li key={index}>
            <div className="relative block w-full aspect-square mx-auto bg-slate-200 rounded animate-pulse"></div>
          </li>
        )}
      </ol>
    </section>
  )
}