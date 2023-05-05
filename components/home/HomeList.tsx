import { Box, Paper, Typography } from '@mui/material';

// *
const mockIPs = [
  { ip: '1.1.1.1', operator: 'ایرانسل', delay: 600, province: 'تهران' },
];

const HomeList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Typography sx={{ width: '5rem', textAlign: 'center' }}>
          ردیف
        </Typography>
        <Typography sx={{ flex: '1 0 0', textAlign: 'center' }}>
          آی پی
        </Typography>
        <Typography sx={{ flex: '1 0 0', textAlign: 'center' }}>
          تاخیر
        </Typography>
        <Typography sx={{ flex: '1 0 0', textAlign: 'center' }}>
          استان
        </Typography>
        <Typography sx={{ flex: '1 0 0', textAlign: 'center' }}>
          اپراتور
        </Typography>
      </Paper>
      لیست آی پی
    </Box>
  );
};

export default HomeList;
