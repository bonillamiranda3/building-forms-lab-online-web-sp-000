export default function manageBand(state = {
  switch (action.type) {
      case 'ADD_BAND':
      return { bands: state.bands.concat({name: action.payload.name})};
      default:
      return state;
  }
};
