import { request } from '@/utils/request';

export async function queryProvince() {
  return request('/local/geographic/province');
}

export async function queryCity(province) {
  return request(`/local/geographic/city/${province}`);
}
