import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import { fetchBanners } from "../../../redux/banners/banners.action";
import { selectActiveBanners } from "../../../redux/banners/banners.select";
import { CarouselCon, Indicator, SelectedIndicator } from "./hero.styles";

const HeroComponent = (props) => {
  const banners = useSelector(selectActiveBanners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBanners());
  }, []);

  return (
    <CarouselCon>
      <Carousel
        showThumbs={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <SelectedIndicator
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <Indicator
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.bannerImageUrl}
            alt={banner.bannerImageAlt}
          />
        ))}
      </Carousel>
    </CarouselCon>
  );
};

export default HeroComponent;
