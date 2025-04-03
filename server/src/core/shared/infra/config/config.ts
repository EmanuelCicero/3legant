import { config as readEnv } from 'dotenv';
import { join } from 'path';

import { IConfig } from '../../domain/config';
import { ConfigValidator } from './validators/config.validator';
import { clearObject } from '../utils';

export class Config {
  private static _env?: IConfig;

  public static get env(): IConfig {
    if (!Config._env) {
      Config.readEnv();
    }

    return Config._env!;
  }

  public static readEnv() {
    if (Config._env) {
      return;
    }

    const env = Config.findEnvConfig();

    Config._env = clearObject<IConfig>({
      db: {
        database: env.DB_DATABASE,
        username: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        dialect: env.DB_DIALECT,
        host: env.DB_HOST,
        logging: env.DB_LOGGING === 'true',
        port: Number(env.DB_PORT),
      },
      keycloak: {
        api_url: env.KEYCLOAK_API_URL,
        realm: env.KEYCLOAK_REALM,
        client_id: env.KEYCLOAK_CLIENT_ID,
        client_secret: env.KEYCLOAK_CLIENT_SECRET,
        admin_cli_secret: env.KEYCLOAK_ADMIN_CLI_SECRET,
      },
    });

    ConfigValidator.validate(Config._env);
  }

  private static findEnvConfig(): Record<string, unknown> {
    if (!process.env.NODE_ENV) {
      console.warn('NODE_ENV not set, using default value "test"');
      process.env.NODE_ENV = 'test';
    }

    const fileName = `.env.${process.env.NODE_ENV}`;
    const { parsed } = readEnv({
      path: join(__dirname, `../../../../../envs/${fileName}`).replace(
        'dist',
        '',
      ),
    });

    if (!parsed) {
      console.warn(`env file "${fileName}" not found`);
    }

    return { ...process.env, ...parsed };
  }
}
