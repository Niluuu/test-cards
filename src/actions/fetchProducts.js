import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from './index';

const url = "https://api.jqestate.ru/v1/properties/country "
export function fetchProducts() {
  return dispatch => {
    dispatch(fetchProductsPending());
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error)
        }
        dispatch(fetchProductsSuccess(res))
        return res
      })
      .catch(error => {
        dispatch(fetchProductsError(error));
      })
  }
}

