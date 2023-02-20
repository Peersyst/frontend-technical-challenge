export const getDate = (dateFormat: Date) => {
    return (
        dateFormat.getMonth() +
        1 +
        "/" +
        dateFormat.getDate() +
        "/" +
        dateFormat.getFullYear() +
        ", " +
        dateFormat.getHours() +
        ":" +
        dateFormat.getMinutes() +
        ":" +
        dateFormat.getSeconds()
    );
};