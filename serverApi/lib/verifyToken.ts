import { getApp } from './db';
export const verifyToken = async (token: string) => {
  const app = getApp();
  try {
    console.log('veryfying token')
    const parts = token.split(' ');
    if (parts.length < 2) {
      console.log('invalid token format');
      return undefined;
    }
    const decoded = await app.auth().verifyIdToken(parts[1]);
    console.log('verified token for user', { email: decoded.email })
    return decoded;
  } catch (e) {
    console.warn('verified token failed')
    return undefined;
  }
};