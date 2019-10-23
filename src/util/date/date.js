import moment from "moment";
import {BIRTHDAY} from "../consts/consts";

export const getMyAge = () => moment().diff(moment(BIRTHDAY, "DD.MM.YYYY"), 'years').toString();