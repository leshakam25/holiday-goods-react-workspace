import React from "react";
import { Grid, Paper, Show, Stack, Typography } from "@pankod/refine-mui";
import { IResourceComponentsProps, useShow } from "@pankod/refine-core";
import { IProduct } from "interfaces";

export const ProductsShow: React.FC<IResourceComponentsProps> = () => {
  const { queryResult } = useShow<IProduct>();
  const { data, isLoading } = queryResult;
  const product = data?.data.title;

  return (
    <Show isLoading={isLoading}>
      {" "}
      <Grid container spacing={2}>
        <Grid item xs={12} lg={3}>
          <Paper
            sx={{
              boxShadow: "none",
              border: "none",
              p: 2,
              paddingX: { xs: 4, md: 2 },
            }}
          >
            <Stack alignItems="center">
              <Typography variant="h5">{product}</Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Show>
  );
};
