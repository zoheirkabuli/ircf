// * en operators
const enOperators = [
  {
    label: 'همراه‌اول',
    value: 'MCI',
  },
  {
    label: 'ایرانسل',
    value: 'MTN',
  },
  {
    label: 'مخابرات',
    value: 'MKH',
  },
  {
    label: 'رایتل',
    value: 'RTL',
  },
  {
    label: 'های‌وب',
    value: 'HWB',
  },
  {
    label: 'آسیاتک',
    value: 'AST',
  },
  {
    label: 'شاتل',
    value: 'SHT',
  },
  {
    label: 'پارس‌آنلاین',
    value: 'PRS',
  },
  {
    label: 'مبین‌نت',
    value: 'MBT',
  },
  {
    label: 'اندیشه‌سبز',
    value: 'ASK',
  },
  {
    label: 'رسپینا',
    value: 'RSP',
  },
  {
    label: 'افرانت',
    value: 'AFN',
  },
  {
    label: 'زی‌تل',
    value: 'ZTL',
  },
  {
    label: 'پیشگامان',
    value: 'PSM',
  },
  {
    label: 'آراکس',
    value: 'ARX',
  },
  {
    label: 'سامانتل',
    value: 'SMT',
  },
  {
    label: 'شاتل‌موبایل',
    value: 'SHM',
  },
  {
    label: 'فن‌آوا',
    value: 'FNV',
  },
  {
    label: 'دیده‌بان‌نت',
    value: 'DBN',
  },
  {
    label: 'آپتل',
    value: 'APT',
  },
];

export default enOperators;

// * get the key by value
export const getKeyByValue = (object: any, value: String) => {
  return Object.keys(object).find((key) => object[key] === value);
};
