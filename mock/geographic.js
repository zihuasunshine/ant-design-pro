import city from './geographic/city.json';
import province from './geographic/province.json';

function getProvince(req, res) {
  return res.json(province);
}

function getCity(req, res) {
  return res.json(city[req.params.province]);
}

export default {
  'GET /local/geographic/province': getProvince,
  'GET /local/geographic/city/:province': getCity,
};
