import { useEffect, useState } from 'react';
import { Box, Autocomplete, TextField, Button } from '@mui/material';

// *
import iranProvinces from '@/lib/IranProvince';
import enOperators from '@/lib/enOperators';

interface FilterType {
  sort: string | null;
  province: string | null;
  operator: string | null;
}

// const sortOptions = ['تاخیر(صعودی)', 'تاخیر(نزولی)'];
const sortOptions = {
  'تاخیر(صعودی)': 'DELAYASC',
  'تاخیر(نزولی)': 'DELAYDES',
};

const HomeHeader = () => {
  const [filter, setFilter] = useState<FilterType>({
    sort: null,
    province: null,
    operator: null,
  });

  useEffect(() => {
    console.table(filter);
  }, [filter]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: '1rem',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Autocomplete
        size="small"
        value={filter.sort}
        onChange={(event: any, newValue: string | null) => {
          setFilter((prevFilter) => ({ ...prevFilter, sort: newValue }));
        }}
        id="controllable-states-demo"
        options={Object.keys(sortOptions)}
        sx={{ flex: { xs: 'none', sm: '1 0 0' } }}
        renderInput={(params) => <TextField {...params} label="ترتیب" />}
      />
      <Autocomplete
        size="small"
        value={filter.province}
        onChange={(event: any, newValue: string | null) => {
          setFilter((prevFilter) => ({ ...prevFilter, province: newValue }));
        }}
        id="Province"
        options={iranProvinces.map((item) => item.persian)}
        sx={{ flex: { xs: 'none', sm: '1 0 0' } }}
        renderInput={(params) => <TextField {...params} label="استان" />}
      />
      <Autocomplete
        size="small"
        value={filter.operator}
        onChange={(event: any, newValue: string | null) => {
          setFilter((prevFilter) => ({ ...prevFilter, operator: newValue }));
        }}
        id="Operator"
        options={Object.values(enOperators)}
        sx={{ flex: { xs: 'none', sm: '1 0 0' } }}
        renderInput={(params) => <TextField {...params} label="اپراتور" />}
      />
      <Button variant="contained">اعمال فیلتر</Button>
    </Box>
  );
};

export default HomeHeader;
