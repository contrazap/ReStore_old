import { AppBar, Stack, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkMode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Stack
          direction="row"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ width: "100%", paddingRight: "16px" }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            RE-STORE
          </Typography>
          <Switch checked={darkMode} onChange={handleThemeChange} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
