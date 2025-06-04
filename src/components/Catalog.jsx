import { Box, Grid } from "@mui/material";

import Products from "../assets/products.json"; // Assuming you have a products.json file in the assets folder

import ProductCard from "./ProductCard";

export default function Catalog() {
  return (
    <>
    <Box
      component="img"
      width="100%"
      height="50vh"
      src="https://immago.com/wp-content/uploads/2023/08/apparel-industry-today.jpg"
      sx={{
        objectFit: "cover",
      }}
    />
    <Grid container spacing={4} px={20} py={4}>
      {Products.map((product, index) => (
        <Grid size={4} key={index}>
          <ProductCard key={index} product={product} />
        </Grid>
      ))}
    </Grid>
    </>
  );
}