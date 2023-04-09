import moment from "moment";

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const getDashboardTimeWish = (): string => {
    let today = new Date()
    let curHr = today.getHours()

    if (curHr < 12) {
        return 'Good morning!';
    } else if (curHr < 18) {
        return 'Good afternoon!';
    } else {
        return 'Good evening!';
    }
};

export const getDashboardDateTime = (date?: string): string => {
    let today = date === undefined ? new Date() : new Date(date);
    let time = "";
    let intation = today.getDate() === 1 ? "st" : today.getDate() === 2 ? "nd" 
    : today.getDate() === 3 ? "nd" : "th";

    time = today.getDate() + intation + " " + monthNames[today.getMonth()] + ", " + days[today.getDay()];

    return time;
};

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const findTheDateGap = (first: Date, sec:Date) => {
    const start = moment(first);
    const end = moment(sec);
    return end.diff(start, 'days');
};