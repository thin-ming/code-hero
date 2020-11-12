const initialState = {
  heroes: [],
  currentPage: 0,
};

const actions = {
  ADD_HEROES(state, { payload }) {
    return {
      ...state,
      ...{
        heroes: [...state.heroes, ...payload],
      },
    };
  },
  SET_CURRENT_PAGE(state, { payload }) {
    return {
      ...state,
      ...{
        currentPage: payload,
      },
    };
  },
};

const heroesReducer = (state = initialState, action) => {
  if (actions[action.type]) {
    return actions[action.type](state, action);
  }
  return state;
};

export default heroesReducer;
