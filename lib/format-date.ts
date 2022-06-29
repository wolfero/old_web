import { format, parseISO } from "date-fns";
import { enUS } from "date-fns/locale";

export const formatDate = (date:string) =>{
  return format(parseISO(date), "d MMMM yyyy", {
    locale: enUS,
  });

}
