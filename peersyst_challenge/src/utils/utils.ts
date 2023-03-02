export function deviceHeight() {
    return window.innerWidth > window.innerHeight
      ? window.innerWidth
      : window.innerHeight;
}

export function RFValue(fontSize: number, standardScreenHeight = 1100) {
    const heightPercent = (fontSize * deviceHeight()) / standardScreenHeight;
    return Math.min(fontSize, Math.round(heightPercent));
}

export const getObjectKeys = <T extends Object>(obj: T): Array<keyof T> => {
    return Object.keys(obj) as Array<keyof T>;
};

export const getDateFormated = (date: Date) => {
    return (
        `${padL(date.getMonth() + 1)}/${padL(
            date.getDate()
          )}/${date.getFullYear()} ${padL(date.getHours())}:${padL(
            date.getMinutes()
          )}:${padL(date.getSeconds())}`
    );
};

export const padL = (nr: number, len = 2, chr = `0`) => `${nr}`.padStart(2, chr);
