export type Game = {
  id: string;
  name: string;
  genre: string;
  price: number;
  isNew: boolean;
  description: string;
  image: string;
};

export type GameFilters = {
  genre: string;
  page: number;
};
