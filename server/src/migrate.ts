import { migrator } from './core/shared/infra/db/sequelize/migrator';
import { SequelizeDb } from './core/shared/infra/db/sequelize/sequelize';

async function bootstrap() {
  migrator(SequelizeDb.sequelize).runAsCLI();
}
bootstrap();
