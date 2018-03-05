import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

export function createPdf(data) {

    const url = `${BASE_URL}api/pdf`;
    console.log(url);

    return axios({
        method: 'post',
        url: url,
        data: data
    });
}

export function uploadPdf(data) {
    const url = `${BASE_URL}api/upload`
    console.log(url);
    return axios({
        method: 'post',
        url: url,
        data: data
    });
}
