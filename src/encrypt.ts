import { createCipheriv, createHash } from 'node:crypto';

const AES_KEY = Buffer.from('a86a86^oH$04r6A1', 'utf8');

const md5 = (value: string) => createHash('md5').update(value, 'utf8').digest('hex');

const toBase64Url = (value: Buffer) =>
  value.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const aesEncrypt = (value: string) => {
  const cipher = createCipheriv('aes-128-cbc', AES_KEY, AES_KEY);
  return toBase64Url(Buffer.concat([cipher.update(value, 'utf8'), cipher.final()]));
};

export const encryptAccountName = (accountName: string) => aesEncrypt(accountName);

export const encryptPassword = (password: string) => aesEncrypt(md5(password));
