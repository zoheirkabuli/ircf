interface PropType {
  key: string;
  number: number;
  item: { ip: string; operator: string; delay: number; province: string };
}

const IpItem = ({ number, item }: PropType) => {
  return (
    <div className="p-[10px] flex items-center gap-[10px] rounded border border-[#faebcc] bg-[#fcf8e3] text-[#8a6d3b]">
      <p className="w-[50px] text-center persian-num">{number}</p>
      <p className="flex-1 text-center">{item.ip}</p>
      <p className="flex-1 text-center persian-num">{item.delay}</p>
      <p className="flex-1 text-center">{item.province}</p>
      <p className="flex-1 text-center">{item.operator}</p>
    </div>
  );
};

export default IpItem;
