import {BIRTHDAY} from "../consts/consts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const getMyAge = (now = new Date()) => {
    const [day, month, year] = BIRTHDAY.split(".").map(Number)
    const hadBirthdayThisYear = now.getMonth() + 1 > month || (now.getMonth() + 1 === month && now.getDate() >= day)
    return String(now.getFullYear() - year - (hadBirthdayThisYear ? 0 : 1))
}

// "2024-05" -> { year: 2024, month: 5 }, "2025" -> { year: 2025, month: null }, missing -> null (ongoing)
const parseYearMonth = (value) => {
    if (!value) return null
    const [year, month] = String(value).split("-").map(Number)
    return { year, month: month || null }
}

const formatYearMonth = (value) => {
    const ym = parseYearMonth(value)
    if (!ym) return "now"
    return ym.month ? `${ MONTHS[ym.month - 1] } ${ ym.year }` : `${ ym.year }`
}

export const formatPeriod = (from, to) => `${ formatYearMonth(from) } — ${ formatYearMonth(to) }`

const plural = (n, word) => `${ n } ${ word }${ n === 1 ? "" : "s" }`

// Closed periods count both boundary months (Aug 2019 — Mar 2022 is 2 years 8 months),
// ongoing ones count elapsed months. Returns null when a boundary has only a year.
export const formatDuration = (from, to, now = new Date()) => {
    const start = parseYearMonth(from)
    const end = parseYearMonth(to) ?? { year: now.getFullYear(), month: now.getMonth() + 1 }
    if (!start?.month || !end.month) return null
    const months = Math.max(1, (end.year - start.year) * 12 + end.month - start.month + (to ? 1 : 0))
    const years = Math.floor(months / 12)
    const rest = months % 12
    return [years && plural(years, "year"), rest && plural(rest, "month")].filter(Boolean).join(" ")
}
