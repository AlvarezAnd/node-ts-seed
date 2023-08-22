import { controller, httpGet } from 'inversify-express-utils';

@controller('/api')
export default class ApiController {
  constructor() {}

  @httpGet('/health')
  getHealth() {
    return {
      status: 'OK',
    };
  }
}
