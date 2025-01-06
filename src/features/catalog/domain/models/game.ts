export type TGame = {
  id: string;
  name: string;
  genre: string;
  price: number;
  isNew: boolean;
  description: string;
  image: string;
};

export type TGameFilters = {
  genre?: string;
  page?: number;
};

export type TGamesResponse = {
  games: TGame[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
};
