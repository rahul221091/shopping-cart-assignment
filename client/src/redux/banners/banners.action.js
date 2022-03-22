import { FETCH_BANNERS } from "./banners.action.types";

export const fetchBanners = () => (dispatch) =>
  fetch("/banners")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: FETCH_BANNERS,
        payload: data,
      });
    });
