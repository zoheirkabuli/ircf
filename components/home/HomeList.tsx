// *
const mockIPs = [
  { ip: '1.1.1.1', operator: 'ایرانسل', delay: 600, province: 'تهران' },
  { ip: '1.1.1.1', operator: 'ایرانسل', delay: 600, province: 'تهران' },
  { ip: '1.1.1.1', operator: 'ایرانسل', delay: 600, province: 'خوزستان' },
  { ip: '1.1.1.1', operator: 'ایرانسل', delay: 600, province: 'خراسان' },
];

// * components
import IpItem from './IpItem';

const HomeList = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <div className="p-[10px] flex items-center gap-[10px] rounded font-bold text-[#31708f] bg-[#d9edf7] border border-[#bce8f1] ">
        <p className="w-[50px] text-center">ردیف</p>
        <p className="flex-1 text-center">آی پی</p>
        <p className="flex-1 text-center">تاخیر</p>
        <p className="flex-1 text-center">استان</p>
        <p className="flex-1 text-center">اپراتور</p>
      </div>

      {mockIPs.map((item, index) => (
        <IpItem key={item.ip} item={item} number={index + 1} />
      ))}
    </div>
  );
};

export default HomeList;
