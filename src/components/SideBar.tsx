import { ReactNode, useState } from "react";

import { Button } from "./Button";

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface NavbarProps {
  children: ReactNode;
  genres: Genre[];
  selectedGenreID: number;
  actionSelectMovie(id: number): void;
}

export function SideBar({ children, genres, selectedGenreID, actionSelectMovie }: NavbarProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => actionSelectMovie(genre.id)}
              selected={selectedGenreID === genre.id}
            />
          ))}
        </div>

      </nav>

      <div className="container">
        {children}
      </div>
    </div>
  );
}