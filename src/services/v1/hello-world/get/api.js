// @app
import api from 'services';
import { errorHandler } from 'services/helpers';

const apiGetHelloWorld = (config) =>
  api({
    url: '/v1/hello-world',
    ...config,
  })
    .then(({ data }) => data)
    .catch(errorHandler);

export default apiGetHelloWorld;
