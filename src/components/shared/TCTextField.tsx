import { FC } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { colors } from "core/theme";

export const TCTextField: FC = () => (
  <InputBase
    fullWidth
    style={{ borderRadius: 50, color: colors.EasternBlue }}
    inputProps={{ style: { textAlign: "center" } }}
    placeholder="What would you like to eat?"
    startAdornment={
      <InputAdornment position="end">
        <FontAwesomeIcon icon={faSearch} />
      </InputAdornment>
    }
    endAdornment={
      <InputAdornment position="start">
        <FontAwesomeIcon icon={faSearch} style={{ visibility: "hidden" }} />
      </InputAdornment>
    }
  />
);
