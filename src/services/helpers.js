export const errorHandler = (error) => {
  console.error('Error', error);
};

export const shouldFetch = (config) => config?.shouldFetch ?? true;
