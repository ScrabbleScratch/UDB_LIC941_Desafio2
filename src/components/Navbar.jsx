import { ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";
import CartDialog from "./CartDialog";
import { useState } from "react";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  const { cart } = useCart();

  // Calcular el precio total del carrito
  // Redondear a dos decimales
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

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
      <Button
        color="inherit"
        startIcon={<ShoppingCartCheckoutOutlined />}
        onClick={() => setOpenCart(true)}
      >
        <Typography variant="body1" fontWeight="bold">
          ${totalPrice} ({cart.length})
        </Typography>
      </Button>
      <CartDialog open={openCart} onClose={() => setOpenCart(false)} />
    </Stack>
  )
}