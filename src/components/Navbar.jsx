import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Container, Stack, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Stack
      w="100%"
      px={6}
      py={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      bgcolor="white"
      boxShadow={5}
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <img width="32px" height="32px" src="/mavito-32x32.png" alt="Mavito Logo" />
        <Typography variant="h6" fontWeight="bold">
          Mavito Shop
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" gap={2}>
        <ShoppingCartCheckoutOutlined />
        <Typography variant="body1" fontWeight="bold">
          $0.00
        </Typography>
      </Stack>
    </Stack>
  )
}