import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  username: 'sa',
  password: 'Onepay0!',
  database: 'onepay_db',
  synchronize: configService.get('DB_SYNC') === 'true' ? true : false,
  cache: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  extra: {
    trustServerCertificate: true,
  },
  migrationsRun: false,
  migrations: ['dist/**/migrations/*.js'],
  migrationsTableName: 'migration_history',
});
