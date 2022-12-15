import React from "react";
import {
  CardMedia,
  Grid,
  Paper,
  Show,
  Stack,
  Typography,
} from "@pankod/refine-mui";
import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import { IProduct } from "interfaces";

export const ProductsShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProduct>();
  const { data, isLoading } = queryResult;
  const product = data?.data;

  return (
    <Show isLoading={isLoading}>
      {" "}
      <Grid container>
        {/* Product image */}
        <Grid item xs={12} lg={6}>
          <Stack>
            <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
              Изображения:
            </Typography>
            {!!product &&
              !!product.images &&
              product.images.map((el, i) => (
                <div key={i}>
                  <img src={el.image} />
                </div>
              ))}
          </Stack>
        </Grid>
        {/* Product info */}
        <Grid item xs={12} lg={6}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack
              alignItems="flex-start"
              direction="column"
              justifyContent="left"
            >
              <Stack direction="row">
                <Typography
                  sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}
                >
                  Артикул:
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                  {product?.article}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography
                  sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}
                >
                  Наименование:
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                  {product?.title}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography
                  sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}
                >
                  Создан:
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                  {product?.createdAt}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography
                  sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}
                >
                  Категория:
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                  {product?.article}
                </Typography>
              </Stack>
              <Stack direction="row">
                <Typography
                  sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}
                >
                  Статус:
                </Typography>
                <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                  {product?.article}
                </Typography>
              </Stack>
            </Stack>
          </Paper>
        </Grid>

        {/* Product description */}
        <Grid item xs={12} lg={12}>
          <Stack>
            <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
              Описание:{" "}
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "18px" } }}
              marginLeft={1}
              textAlign="justify"
            >
              {product?.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Show>
  );
};
