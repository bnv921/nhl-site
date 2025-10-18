"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("https://statsapi.web.nhl.com/api/v1/schedule")
      .then((res) => res.json())
      .then((data) => {
        const allGames = data.dates?.flatMap(d => d.games) || [];
        setGames(allGames);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen bg-[#0C2340] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">NHL Schedule</h1>

      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {games.map((game) => (
            <div key={game.gamePk} className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg font-semibold">
                {game.teams.away.team.name} @ {game.teams.home.team.name}
              </p>
              <p>{new Date(game.gameDate).toLocaleString()}</p>
              <p className="opacity-75">{game.status.detailedState}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

