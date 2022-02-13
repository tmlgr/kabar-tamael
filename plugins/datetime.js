import { id } from "date-fns/locale";
import { differenceInDays, format, formatDistanceStrict } from "date-fns";

const shortTimestamp = (date) => {
  const articleDate = new Date(date);
  const todayDate = new Date();

  if (differenceInDays(todayDate, articleDate) > 6) {
    return format(articleDate, "EEEE, dd MMMM yyyy | HH:ii", { locale: id });
  } else {
    return formatDistanceStrict(articleDate, todayDate, {
      locale: id,
      addSuffix: true,
    });
  }
};

export default ({ app }, inject) => {
  inject("datetime", (date) => shortTimestamp(date));
};
