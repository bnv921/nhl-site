"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/nhl/schedule")
      .then((res) => res.json())
      .then((data) => {
        const allGames = data.dates?.flatMap((d) => d.games) || [];
        setGames(allGames);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="min-h-screen bg-[#0C2340] text-white p-8">
      <h1 className="text-4xl font-bold mb-6">NHL Schedule</h1>
      {games.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4">
          {games.map((g) => (
            <div key={g.gamePk} className="bg-white/10 p-4 rounded-lg">
              <p className="text-lg font-semibold">
                {g.teams.away.team.name} @ {g.teams.home.team.name}
              </p>
              <p>{new Date(g.gameDate).toLocaleString()}</p>
              <p className="opacity-75">{g.status.detailedState}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

