import useEmblaCarousel from "embla-carousel-react";
import Grid from "@mui/material/Grid";
import { useEffect } from "react";
export default function Carousel() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <Grid
      container
      size={12}
      className="embla"
      ref={emblaRef}
    >
      <Grid
        container
        size={12}
        className="embla__container"
      >
        <Grid
          size={12}
          className="embla__slide"
        >
          Slide 1
        </Grid>
        <Grid
          size={12}
          className="embla__slide"
        >
          Slide 2
        </Grid>
        <Grid
          size={12}
          className="embla__slide"
        >
          Slide 3
        </Grid>
      </Grid>
    </Grid>
  );
}
