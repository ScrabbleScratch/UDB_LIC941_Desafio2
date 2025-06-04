import { Box, Button, Paper, Stack, Typography } from "@mui/material";

export default function ProductCard({ product }) {
  return (
    <Paper className="product-card" sx={{ p: 2, bgcolor: "#fafafa" }}>
      <Box width="100%" height="auto" sx={{ aspectRatio: "2 / 1" }}>
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          width="100%"
          height="100%"
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
        {product.subtitle}
      </Typography>
      <Stack mt={2} direction="row" justifyContent="space-between" alignItems="center">
        <Typography px={2} py={0.5} variant="body1" fontWeight="bold" bgcolor="lightgray" borderRadius="100px">
          {product.category}
        </Typography>
        <Button variant="contained" color="warning">
          Detalles
        </Button>
      </Stack>
    </Paper>
  );
}