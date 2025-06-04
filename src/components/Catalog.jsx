import { Grid } from "@mui/material";

import Products from "../assets/products.json"; // Assuming you have a products.json file in the assets folder

import ProductCard from "./ProductCard";

export default function Catalog() {
  return (
    <Grid container spacing={4}>
      {Products.map((product, index) => (
        <Grid size={4} key={index}>
          <ProductCard key={index} product={product} />
        </Grid>
      ))}
    </Grid>
  );
}