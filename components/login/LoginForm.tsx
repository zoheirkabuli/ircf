import { Paper, TextField, Box, Button, Typography } from '@mui/material';

const LoginForm = () => {
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
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontVariationSettings: '"wght" 700',
          textAlign: 'center',
          lineHeight: '1.6',
          fontSize: '4rem',
        }}
      >
        ورود
      </Typography>
      <Box
        component={'form'}
        // onSubmit={submitHandler}
        action="/api/send"
        method="post"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          flex: '1 0 0',
        }}
      >
        <TextField
          type="email"
          id="Email"
          label="ایمیل"
          variant="outlined"
          fullWidth
        />
        <TextField
          type="password"
          id="Password"
          label="رمز عبور"
          variant="outlined"
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ marginTop: 'auto' }}>
          ورود
        </Button>
      </Box>
    </Paper>
  );
};

export default LoginForm;
