import React from "react";

import { Typography } from "@/shared/components";

type FiltersProps = {
  genres: string[];
  selectedGenre: string | undefined;
  onGenreChange: (genre: string) => void;
};

const GameFilters = ({
  genres,
  selectedGenre,
  onGenreChange,
}: FiltersProps) => {
  return (
    <div className="grid gap-12 py-12 px-32 border-0.5 border-grey-100">
      <Typography variant="h1" className="text-grey-500 text-4xl">
        Top Sellers
      </Typography>
      <div className="flex items-center justify-end gap-6">
        <div className="flex items-center gap-6">
          <label htmlFor="genre" className="text-grey-500 text-xl font-bold">
            Genre
          </label>
          <Typography variant="p" className="text-grey-500 text-base">
            |
          </Typography>
        </div>
        <select
          id="genre"
          value={selectedGenre}
          onChange={(e) => onGenreChange(e.target.value)}
          className="border border-none rounded text-grey-500 text-xl"
        >
          <option value={undefined}>All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GameFilters;
