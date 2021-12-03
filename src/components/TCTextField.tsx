import { FC } from 'react';
import { InputAdornment, InputBase } from '@mui/material';
import { SearchSharp } from '@mui/icons-material';

import { colors } from 'theme';

export const TCTextField: FC = () => (
  <InputBase
    fullWidth
    style={{ borderRadius: 50, color: colors.EasternBlue }}
    inputProps={{ style: { textAlign: 'center' } }}
    placeholder="What would you like to eat?"
    startAdornment={
      <InputAdornment position="end">
        <SearchSharp color="primary" />
      </InputAdornment>
    }
    endAdornment={
      <InputAdornment position="start">
        <SearchSharp style={{ visibility: 'hidden' }} />
      </InputAdornment>
    }
  />
);
