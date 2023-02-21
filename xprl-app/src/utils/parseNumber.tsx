/** @format */

export function parseStringToNumber(number: string) {
    return parseFloat(number).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}
