import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";
import { CreditCardOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

export default function CartDialog({ open, onClose }) {
  const { cart, removeItem, clearCart } = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Carrito de compra</DialogTitle>
      <DialogContent>
        {cart.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            El carrito está vacío.
          </Typography>
        ) : (
          <Stack gap={2}>
            <TableContainer component={Box}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Producto</TableCell>
                    <TableCell align="right">Precio</TableCell>
                    <TableCell align="right">Cantidad</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="right">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                      <TableCell align="right">{item.quantity}</TableCell>
                      <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      <TableCell align="right">
                        <IconButton onClick={() => removeItem(item.id)}>
                          <DeleteOutlineOutlined />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6">${totalPrice}</Typography>
            </Stack>
          </Stack>
        )}
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" color="inherit" onClick={onClose}>Cerrar</Button>
        {cart.length > 0 && (
          <>
            <Button color="secondary" onClick={clearCart}>
              Limpiar carrito
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={onClose}
              startIcon={<CreditCardOutlined />}
            >
              Pagar
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}