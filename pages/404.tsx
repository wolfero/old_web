import theme from "../src/theme/index";
import NotFoundPage from "../src/components/NotFoundPage/NotFoundPage";

const NotFound = () => {
  const themes = [theme.colorsTags.white, theme.colorsTags.black];
  return <NotFoundPage themes={themes}/>;
};

export default NotFound;
