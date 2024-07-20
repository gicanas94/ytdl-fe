// @packages
import useSWR from 'swr';

// @app
import { shouldFetch } from 'services/helpers';

// @own
import apiGetHelloWorld from './api';
import selectors from './selectors';

const useHelloWorld = (config, swrOptions) => {
  const enabled = shouldFetch(config);
  const id = '/v1/hello-world';

  const { data, error, isLoading, isValidating, mutate } = useSWR(
    enabled ? id : null,
    () => apiGetHelloWorld(),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      ...swrOptions,
    },
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
    ...selectors(data),
  };
};

export default useHelloWorld;
