import { writable } from 'svelte/store';
import { axios } from 'axios';


async function getArticlesByType(contentType) {
    const path = `../../content/${contentType}`;
    return axios.get(path);
}
 

