import { resolve } from 'path';

export const getSlug = (title: string) => {
    title = title.replace(/[&\/\\#*?]/g, '');
    return title.replace(/\s+/g, '-').toLowerCase();
}

export const createPostFileName = (
    contentUrl: string,
    slug: string,
    ext: string = '.json'
): string => {
    return resolve(contentUrl, `${slug}${ext}`);
}