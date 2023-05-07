'use client';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { SingleValue } from 'react-select';

// *
import iranProvinces from '@/lib/IranProvince';
import enOperators from '@/lib/enOperators';

const sortOptions = [
  { label: 'تاخیر(صعودی)', value: 'DELAYASC' },
  { label: 'تاخیر(نزولی)', value: 'DELAYDES' },
];

type StateType = { value: string; label: string } | null;

const HomeHeader = () => {
  const [sort, setSort] = useState<StateType>(null);
  const [province, setProvince] = useState<StateType>(null);
  const [operator, setOperator] = useState<StateType>(null);

  useEffect(() => {
    console.table({
      sort: sort?.value,
      province: province?.value,
      operator: operator?.value,
    });
  }, [sort, province, operator]);

  return (
    <div className="flex md:items-center gap-[10px] flex-col md:flex-row">
      <Select
        className="flex-1"
        id="select-sort"
        placeholder="ترتیب"
        value={sort}
        onChange={(newValue) => {
          setSort(newValue);
        }}
        options={sortOptions}
      />
      <Select
        className="flex-1"
        id="select-operator"
        placeholder="اپراتور"
        value={operator}
        onChange={(newValue) => {
          setOperator(newValue);
        }}
        options={enOperators}
      />
      <Select
        className="flex-1"
        id="select-province"
        placeholder="استان"
        value={province}
        onChange={(newValue) => {
          setProvince(newValue);
        }}
        options={iranProvinces}
      />
      <button
        type="button"
        className="inline-block rounded bg-[#FF7900] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#FF7900] transition duration-150 ease-in-out hover:bg-[rgb(222,106,1)] hover:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.3),0_4px_18px_0_rgba(255,121,0,0.2)] focus:bg-[rgb(222,106,1)] focus:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.3),0_4px_18px_0_rgba(255,121,0,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.3),0_4px_18px_0_rgba(255,121,0,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(255,121,0,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.2),0_4px_18px_0_rgba(255,121,0,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.2),0_4px_18px_0_rgba(255,121,0,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(255,121,0,0.2),0_4px_18px_0_rgba(255,121,0,0.1)]"
      >
        فیلتر
      </button>
    </div>
  );
};

export default HomeHeader;
