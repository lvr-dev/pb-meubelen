export function filterBadges(badgeName, items) {
    return items.filter(project => project.tags.indexOf(badgeName) !== -1);
}

export function getTags(items) {
    let tagList = [];
    items.map((item) => {
        item.tags.map(tag => {
            if (tagList.indexOf(tag) === -1) {
                tagList = [...tagList, tag];
            }
        })
    });
    return tagList;
}