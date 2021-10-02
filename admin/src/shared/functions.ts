import logger from './Logger';
import { resolve } from 'path';

export const pErr = (err: Error) => {
    if (err) {
        logger.err(err);
    }
};

export const getRandomInt = () => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export const getSlug = (title: string) => {
    title = title.replace(/[&\/\\#*?]/g, '');
    return title.replace(/\s+/g, '-').toLowerCase();
}

export const createPostFileName = (
    contentUrl: string,
    slug: string,
    ext: string = '.json'
): string => {
    const fileName = `${slug}${ext}`;
    return resolve(contentUrl, fileName);
}