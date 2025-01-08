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
    <div className="grid gap-12 py-8 px-6 border-0.5 border-grey-100 md:py-12 md:px-32">
      <Typography variant="h1" className="text-grey-500 text-4xl">
        Top Sellers
      </Typography>
      <div className="flex items-center gap-6 justify-start md:justify-end">
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
          className="border border-none rounded text-grey-500 text-xl focus:outline-none focus:ring-0 w-full md:w-auto"
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {`${genre.charAt(0).toUpperCase()}${genre
                .slice(1)
                .toLowerCase()}`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default GameFilters;
