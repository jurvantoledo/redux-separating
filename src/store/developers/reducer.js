const initialState = [
  {
    id: 1,
    name: "kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [2, 3, 4, 5],
  },
  {
    id: 2,
    name: "Jur",
    website: "Unknown",
    favorites: [1, 3, 6],
  },
  {
    id: 3,
    name: "Mr Mol",
    website: "Unknown",
    favorites: [1, 2, 3, 6],
  },
];

export default function userSliceReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
