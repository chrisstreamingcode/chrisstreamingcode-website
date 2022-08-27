const title = 'Chris Streaming Code';

const getTitle = (subtitle = '') =>
    `${subtitle ? `${subtitle} | ` : ''}${title}`;

export default getTitle;