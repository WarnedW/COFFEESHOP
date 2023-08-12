export const FILTERED_PRODUCTS = (products) => ({
   type: 'FILTERED_PRODUCTS',
   payload: products
})

export const SELECT_FILTER = (filter) => ({
   type: 'SELECT_FILTER',
   payload: filter
})

export const CHANGE_FILTER_INPUT = (value) => ({
   type: 'CHANGE_FILTER_INPUT',
   payload: value
})