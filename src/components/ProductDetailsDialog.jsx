import { Box, Button, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";
import { AddShoppingCartOutlined } from "@mui/icons-material";

// Muestra los detalles de un producto y permite agregarlo al carrito
export default function ProductDetailsDialog({ product, open, onClose }) {
  const { addItem } = useCart();

  // Agregar el producto al carrito y cerrar el dialog
  const handleAddToCart = () => {
    addItem(product.id);
    onClose();
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Box width="100%" height="auto" borderBottom="1px solid #e0e0e0" sx={{ aspectRatio: "1 / 1" }}>
          <Box
            component="img"
            src={product.image}
            alt={product.title}
            width="100%"
            height="100%"
            sx={{ objectFit: "contain" }}
          />
        </Box>
        <Stack mt={2} gap={4}>
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            <Typography variant="h5" fontWeight="bold">
              {product.title}
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              ${product.price.toFixed(2)}
            </Typography>
          </Stack>
          <Typography height="4em" maxHeight="4em" variant="body2" color="textSecondary" overflow="hidden" textOverflow="ellipsis">
            {product.description}
          </Typography>
          <Typography width="fit-content" px={2} py={0.5} variant="body1" fontWeight="bold" bgcolor="lightgray" borderRadius="100px">
            {product.category}
          </Typography>
        </Stack>
        <Stack mt={4} direction="row" justifyContent="center" alignItems="center" gap={4}>
          <Button
            variant="outlined"
            color="error"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="warning"
            startIcon={<AddShoppingCartOutlined />}
            onClick={handleAddToCart}
          >
            Agregar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}