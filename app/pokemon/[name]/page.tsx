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
      <div className="flex gap-4">
        <h2 className="capitalize">#{data.id} {data.name}</h2>
        <h3 className="sr-only">Types</h3>
        <div>
          <ul className="flex gap-2">
            {data.types.map(type =>
              <li key={type.type.name}>{type.type.name}</li>)
            }
          </ul>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 aspect-square mx-auto">
        <Image alt={data.name} src={data.sprites.front_default} fill />
      </div>

      <h3 className="sr-only">Moves</h3>
      <div>
        <ul className="flex gap-2">
          {data.moves.map(move =>
            <li key={move.move.name}>{move.move.name}</li>)
          }
        </ul>
      </div>

      <h3 className="sr-only">Stats</h3>
      <table>
        <thead>
          <td>Stat</td>
          <td>Value</td>
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
