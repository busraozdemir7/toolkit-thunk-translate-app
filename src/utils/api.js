import axios from "axios";

export const api = axios.create({
    baseURL: "https://text-translator2.p.rapidapi.com",
    headers: {
        'x-rapidapi-key': 'dd04f2866bmsh696e9bc954f3358p1b1451jsn400e310dafcb',
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
    },
});