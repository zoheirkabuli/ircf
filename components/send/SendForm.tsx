import { Paper, TextField, Box, Autocomplete, Button } from '@mui/material';
import { useState, useEffect } from 'react';

// *
import iranProvinces from '@/lib/IranProvince';
import enOperators from '@/lib/enOperators';

// * interface
interface dataType {
  ip: string | null;
  delay: number | null;
  city: string | null;
  operator: string | null;
}

const SendForm = () => {
  const [data, setData] = useState<dataType>({
    ip: null,
    delay: null,
    city: null,
    operator: null,
  });

  useEffect(() => {
    console.table(data);
  }, [data]);

  const submitHandler = async (event: any) => {
    event.preventDefault();
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resJson = await res.json();

    console.log(res);
    console.log(resJson);

    if (res.ok) {
      setData({
        ip: null,
        delay: null,
        city: null,
        operator: null,
      });
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        alignSelf: 'center',
        width: {
          xs: '100%',
          sm: '50%',
        },
        padding: '1.5rem',
        flex: '1 0 0',
      }}
    >
      <Box
        component={'form'}
        onSubmit={submitHandler}
        action="/api/send"
        method="post"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          height: '100%',
        }}
      >
        <TextField
          id="IP"
          label="آی‌پی"
          variant="outlined"
          fullWidth
          value={data.ip ? data.ip : ''}
          onChange={(event: any) => {
            setData((prevData) => ({ ...prevData, ip: event.target.value }));
          }}
        />
        <TextField
          id="Delay"
          label="تاخیر(delay)"
          variant="outlined"
          type="number"
          fullWidth
          value={data.delay ? data.delay : ''}
          onChange={(event: any) => {
            setData((prevData) => ({
              ...prevData,
              delay: Number(event.target.value),
            }));
          }}
        />
        <Autocomplete
          id="Province"
          options={iranProvinces.map((item) => item.persian)}
          renderInput={(params) => <TextField {...params} label="استان" />}
          value={data.city}
          onChange={(event: any, newValue: string | null) => {
            setData((prevData) => ({ ...prevData, city: newValue }));
          }}
        />
        <Autocomplete
          id="Operator"
          options={Object.values(enOperators)}
          renderInput={(params) => <TextField {...params} label="اپراتور" />}
          value={data.operator}
          onChange={(event: any, newValue: string | null) => {
            setData((prevData) => ({ ...prevData, operator: newValue }));
          }}
        />
        <Button type="submit" variant="contained" sx={{ marginTop: 'auto' }}>
          ارسال آی‌‌پی
        </Button>
      </Box>
    </Paper>
  );
};

export default SendForm;
