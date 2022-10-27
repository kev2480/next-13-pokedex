import Link from "next/link";
import { getPokemon } from "../../api-client";
import Image from 'next/image';

// @ts-ignore
export default async function Page({ params }: {
  params: { page: string }
}) {
  const currentPage = (params.page && parseInt(params.page, 10)) || 0;

  const data = await getPokemon(currentPage);

  return (
    <section>
      <ol className="grid gap-4 grid-cols-2">
        {data.results.map(result =>
        <li key={result.name}>
          <Link href={`/pokemon/${result.name}/?prevPage=${currentPage}`} className="relative block w-full aspect-square mx-auto">
            <Image
              className=""
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${result.url.split("/")[result.url.split("/").length - 2]}.png`}
              alt={result.name}
              fill
            />
          </Link>
        </li>)}
      </ol>
      <div className="flex justify-between">
        {currentPage > 0 && <Link href={`/${currentPage - 1}`}>
          <span className="sr-only">Previous</span><span className="text-8xl" role="presentation">←</span>
        </Link>}
        <Link href={`/${currentPage + 1}`} className="ml-auto"><span className="sr-only">Next</span><span className="text-8xl" role="presentation">→</span></Link>
      </div>
    </section>
  );
};