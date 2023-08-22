import { fluentProvide } from 'inversify-binding-decorators';

const provider = (identifier: symbol) => {
  return fluentProvide(identifier).inSingletonScope().done();
};

export default provider;