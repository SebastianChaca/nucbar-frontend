export const cleanQuery = search => {
  return search
    .replace('?', '')
    .split('category')
    .join('')
    .split('page')
    .join('')
    .split('limit')
    .join('')
    .split('=')
    .join('')
    .split('&');
};
