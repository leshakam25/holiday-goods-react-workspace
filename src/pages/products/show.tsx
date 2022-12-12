import React from "react";
import { Grid, Paper, Show, Stack, Typography } from "@pankod/refine-mui";
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
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Артикул:{" "}
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "18px" }, fontWeight: "300" }}
                marginLeft={1}
              >
                {product?.id}
              </Typography>
            </Stack>
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Наименование:{" "}
              </Typography>
              <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                {product?.title}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Создан:{" "}
              </Typography>
              <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                {product?.createdAt}
              </Typography>
            </Stack>
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Категория:{" "}
              </Typography>
              <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                {product?.id}
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            {" "}
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Статус:{" "}
              </Typography>
              <Typography sx={{ fontSize: { xs: "18px" } }} marginLeft={1}>
                {" "}
                {product?.id}
              </Typography>
            </Stack>
          </Paper>
        </Grid>{" "}
        <Grid item xs={12} lg={12}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack alignItems="flex-start" direction="row">
              <Typography sx={{ fontSize: { xs: "18px" }, fontWeight: "700" }}>
                Изображения:
              </Typography>
              <Typography
                sx={{ fontSize: { xs: "18px" } }}
                marginLeft={1}
                textAlign="justify"
              >
                Images
              </Typography>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack alignItems="flex-start" direction="row">
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
          </Paper>
        </Grid>
      </Grid>
    </Show>
  );
};
