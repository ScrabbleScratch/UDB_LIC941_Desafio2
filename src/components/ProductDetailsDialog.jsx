import { Box, Button, Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { useCart } from "../hooks/useCart";
import { AddShoppingCartOutlined } from "@mui/icons-material";

export default function ProductDetailsDialog({ product, open, onClose }) {
  const { addItem } = useCart();

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
            height="auto"
            sx={{ objectFit: "cover" }}
          />
        </Box>
        <Stack my={2} direction="row" justifyContent="space-between" alignItems="flex-start">
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