import client from './client';

export async function getConfig() {
  const response = await client.get('/v1/config');

  return response.data.data;
}
