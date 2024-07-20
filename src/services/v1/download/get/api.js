// @app
import api from 'services';
import { errorHandler } from 'services/helpers';

const apiDownload = (config) =>
  api({
    url: '/v1/download',
    ...config,
  })
    .then(({ data }) => data)
    .catch(errorHandler);

export default apiDownload;
