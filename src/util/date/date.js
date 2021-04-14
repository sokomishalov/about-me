import { DateTime } from "luxon";
import { BIRTHDAY } from "../consts/consts";

export const getMyAge = () => DateTime.fromFormat(BIRTHDAY, 'dd.MM.yyyy').diffNow('years').years;