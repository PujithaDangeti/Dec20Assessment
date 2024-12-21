export const sortReducer = (state, action) => {
    switch (action.type) {
      case 'SORT_BY_PRICE_LOW_TO_HIGH':
        return [...state].sort((a, b) => a.price - b.price);
      case 'SORT_BY_PRICE_HIGH_TO_LOW':
        return [...state].sort((a, b) => b.price - a.price);
      case 'SORT_BY_NAME_A_TO_Z':
        return [...state].sort((a, b) => a.name.localeCompare(b.name));
      case 'SORT_BY_NAME_Z_TO_A':
        return [...state].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return state;
    }
  };
  