import {
  Container,
  Pagination,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Paginations = ({ onChangePage, page, count }) => {
  return (
    <Container>
      <Stack spacing={2}>
        <ThemeProvider theme={theme}>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#ff0000",
              borderRadius: "45px",
              boxShadow: "3px 8px 14px rgba(136, 198, 253, 0.19)",
              padding: "9px 12px 9px 12px",
            }}
            count={count}
            color="primary"
            page={page}
            onChange={(_, num) => onChangePage(num)}
            size="midle"
          />
        </ThemeProvider>
      </Stack>
    </Container>
  );
};

export default Paginations;
