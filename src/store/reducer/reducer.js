import {data} from '../../resources/data'

const initialState = {
   products: data,
   filteredProducts: data,
   inputFilter:'',
   selectFilter: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case 'FILTERED_PRODUCTS':
      return { ...state, filteredProducts: action.payload };
    case 'SELECT_FILTER':
      return { ...state, selectFilter: action.payload };
   case 'CHANGE_FILTER_INPUT':
      return { ...state, inputFilter: action.payload };
   default:
      return state;
  }
}

export default reducer;