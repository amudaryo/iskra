import { AspectRatio } from "@mui/joy";

const Banner = ({ day, today, cards }) => {
  const picture = cards[day].banner;
  const placeholder =
    "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2xpdHRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

  return (
    <AspectRatio ratio="3">
      <img src={picture.length ? picture : placeholder} alt="banner" />
    </AspectRatio>
  );
};

export default Banner;
