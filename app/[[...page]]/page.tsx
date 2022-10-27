import Link from "next/link";
import { getPokemon } from "../../api-client";

// @ts-ignore
export default async function Page({ params }: {
  params: { page: string }
}) {
  const currentPage = (params.page && parseInt(params.page, 10)) || 0;

  const data = await getPokemon(currentPage);

  return (
    <section>
      <h2>Page content</h2>
      {currentPage > 0 && <Link href={`/${currentPage - 1}`}>Previous</Link>}
      <Link href={`/${currentPage + 1}`}>Next</Link>
      <ol>
        {data.results.map(result => <li key={result.name}><Link href={`/pokemon/${result.name}/?prevPage=${currentPage}`}>{result.name}</Link></li>)}
      </ol>
    </section>
  );
};