import { createSelector } from "reselect";

const selectBanners = (state) => state.banners;

export const selectActiveBanners = createSelector([selectBanners], (banners) =>
  banners.filter((banner) => banner.isActive).sort((a, b) => a.order - b.order)
);
