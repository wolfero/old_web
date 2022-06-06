import { format, parseISO } from "date-fns";
import { en } from "date-fns/locale";

export const formatDate = (date) =>
  format(parseISO(date), "d MMMM yyyy", {
    locale: en,
  });
