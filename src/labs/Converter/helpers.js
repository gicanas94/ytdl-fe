/* eslint-disable import/prefer-default-export */

export const getIdFromUrl = (_url) => {
  try {
    const url = new URL(_url);
    return url.searchParams.get('v');
  } catch (error) {
    console.log('Invalid URL', error);
  }

  return '';
};
