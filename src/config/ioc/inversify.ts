import './loader';
import { Container } from 'inversify';
import { buildProviderModule } from 'inversify-binding-decorators';

const container: Container = new Container();

container.load(buildProviderModule());

export default container;
