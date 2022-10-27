import { getSingularPokemon } from "../../../api-client";
import Image from 'next/image';
import Link from "next/link";

// @ts-ignore
export default async function Page({ params, searchParams }: {
  params: { name: string },
  searchParams: { prevPage: string }
}) {
  const pokemonName = params.name;
  const previousPage = searchParams.prevPage || "";

  const data = await getSingularPokemon(pokemonName);

  return (
    <section>
      <Link href={`/${previousPage}`}>Back</Link>
      <div className="flex gap-4 justify-between">
        <h2 className="uppercase font-bold text-3xl">#{data.id} {data.name}</h2>
        <h3 className="sr-only">Types</h3>
        <div>
          <ul className="flex gap-2 flex-wrap">
            {data.types.map(type =>
              <li key={type.type.name}>{type.type.name}</li>)
            }
          </ul>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 aspect-square mx-auto mb-4">
        <Image alt={data.name} src={data.sprites.front_default} fill />
      </div>

      <h3 className="sr-only">Moves</h3>
      <details className="mb-4">
        <summary>See all moves</summary>
        <ul className="flex gap-2 flex-wrap">
          {data.moves.map(move =>
            <li key={move.move.name}>{move.move.name}</li>)
          }
        </ul>
      </details>

      <h3 className="sr-only">Stats</h3>
      <table className="mb-4 table-auto w-full">
        <thead>
          <tr className="text-left">
            <th>Stat</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.stats.map(stat =>
            <tr key={stat.stat.name}>
              <td>{stat.stat.name}</td>
              <td>{stat.base_stat}</td>
            </tr>)
          }
        </tbody>
      </table>
    </section>
  );
};
