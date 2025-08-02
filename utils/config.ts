import dotenv from 'dotenv';
dotenv.config();

interface AppConfig {
  standardUser: string;
  password: string;
  legitUsers: string[];
}

export const config: AppConfig = {
  standardUser: process.env.STANDARD_USER?.trim() || '',
  password: process.env.PASSWORD?.trim() || '',
  legitUsers: process.env.LEGIT_USERS
    ? process.env.LEGIT_USERS.split(',').map(u => u.trim())
    : []
};
