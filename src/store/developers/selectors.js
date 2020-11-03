function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export const selectDevelopers = (state) => {
  return state.developers;
};

export const selectDevelopersWithFavorite = (favoriteId) => {
  return (state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  };
};

export const selectDeveloperStatistics = (state) => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter((dev) => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      (dev) => dev.favorites.length === 0
    ).length,
    avgnumberofFavorites: average(
      state.developers.map((dev) => dev.favorites.length)
    ),
  };
};
