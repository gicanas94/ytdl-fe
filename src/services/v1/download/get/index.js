// @packages
import useSWRMutation from 'swr/mutation';

// @own
import apiDownload from './api';

const useDownload = (config, swrOptions) => {
  const id = '/v1/download';

  const { data, error, isMutating, reset, trigger } = useSWRMutation(
    id,
    (key, { arg }) => apiDownload(arg),
    swrOptions,
  );

  return {
    data,
    error,
    isMutating,
    reset,
    trigger,
  };
};

export default useDownload;
