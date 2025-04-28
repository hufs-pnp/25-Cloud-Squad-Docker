import { Sequelize } from 'sequelize';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = Number.isInteger(process.env.DB_PORT) ? Number.parseInt(process.env.DB_PORT as string) : 3306;
const DB_NAME = process.env.DB_NAME || 'db_mbti';
const DB_USERNAME = process.env.DB_USERNAME || 'user_mbti';
const DB_PASSWORD = process.env.DB_PASSWORD || 'pw_mbti';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: 'mysql',
    dialectModule: require('mysql2'),
    host: DB_HOST,
    port: DB_PORT
});

export default sequelize;
