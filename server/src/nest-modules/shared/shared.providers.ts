import { AxiosHttpService } from '../../core/shared/infra/services/axios';

export const HTTP_SERVICE_PROVIDER = {
  provide: 'HttpService',
  useValue: new AxiosHttpService(),
};
