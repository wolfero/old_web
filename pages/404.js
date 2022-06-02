import theme from "../src/theme/index";
import NotFoundPage from "../src/components/404/404";

const NotFound = () => {
  const themes = [theme.colorsTags.white, theme.colorsTags.black];
  return <NotFoundPage themes={themes}></NotFoundPage>;
};

export default NotFound;
