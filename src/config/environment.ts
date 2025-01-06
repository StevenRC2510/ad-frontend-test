const environment = {
  enabledMockApi: process.env.NEXT_PUBLIC_USE_MOCKS ?? "true",
  appsUrl: {
    games: {
      api: process.env.NEXT_PUBLIC_API_GAMES_URL ?? "http://localhost:3000",
    },
  },
};

export default environment;
