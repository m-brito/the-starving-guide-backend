// External Libraries
import { DataSource } from 'typeorm'

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity.js'],
  migrations: ['src/migrations/*.js'],
  synchronize: false,
  ssl: false,
  logging: true
})

export default AppDataSource
