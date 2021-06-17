import { DateTime } from "luxon";
import { BIRTHDAY } from "../consts/consts";

export const getMyAge = () => Math.trunc(Math.abs(DateTime.fromFormat(BIRTHDAY, 'dd.MM.yyyy').diffNow('years').years)).toString();