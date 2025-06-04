import { Box, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, Stack, Typography } from "@mui/material";

import Products from "../assets/products.json"; // Importa el JSON de productos

import ProductCard from "./ProductCard";
import { useState } from "react";
import Slider from "react-slick";

export default function Catalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  var sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
  };

  return (
    <>
      <Slider {...sliderSettings}>
        <div>
          <Box
            component="img"
            width="100%"
            height="60vh"
            src="https://halcoeurope.com/cdn/shop/articles/articleapparel_1200x.jpg?v=1709558418"
            sx={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <Box
            component="img"
            width="100%"
            height="60vh"
            src="https://api.c2ccertified.org/assets/sectorpages/apparel,-textile,-footwear-sector-page-cradle-to-cradle-products-innovation-institute-(1).jpg"
            sx={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <Box
            component="img"
            width="100%"
            height="60vh"
            src="https://s.abcnews.com/images/Business/GTY_american_apparel_store_inside_jef_151005.jpg"
            sx={{ objectFit: "cover" }}
          />
        </div>
      </Slider>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #e0e0e0"
      >
        <Typography variant="h5" p={2}>
          <b>Productos de la categoría:</b> {category || "Todos"}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          p={2}
        >
          <OutlinedInput
            type="search"
            placeholder="Buscar"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
            <InputLabel id="sort-label">Categoría</InputLabel>
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              label="Categoría"
              size="small"
            >
              <MenuItem value="">
                <em>Todos</em>
              </MenuItem>
              {/* Renderizar las categorías unicas */}
              {Products
                .map(product => product.category)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Grid container spacing={4} px={20} py={4}>
        {/* Renderizar los productos filtrados por categoría y busqueda */}
        {Products
          .filter(product => product.category === category || category === "")
          .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
          .map((product, index) => (
            <Grid size={4} key={index}>
              <ProductCard key={index} product={product} />
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}