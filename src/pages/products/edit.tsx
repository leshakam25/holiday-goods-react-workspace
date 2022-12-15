import { HttpError, useShow } from "@pankod/refine-core";
import {
  Edit,
  TextField,
  useAutocomplete,
  Grid,
  Paper,
} from "@pankod/refine-mui";
import { useForm } from "@pankod/refine-react-hook-form";

import { IProduct, ICategory } from "interfaces";

export const ProductsEdit: React.FC = () => {
  const {
    saveButtonProps,
    register,
    formState: { errors },
  } = useForm<IProduct, HttpError, IProduct & { category: ICategory }>();

  const { queryResult } = useShow<IProduct>();
  const { data, isLoading } = queryResult;
  const product = data?.data;

  const { autocompleteProps } = useAutocomplete<ICategory>({
    resource: "categories",
  });

  return (
    <Edit isLoading={isLoading} saveButtonProps={saveButtonProps}>
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
            {" "}
            <TextField
              fullWidth
              label=" Артикул"
              {...register("id")}
              sx={{ my: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
            <TextField
              fullWidth
              label="Наименование"
              {...register("title")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
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
            <TextField
              disabled
              fullWidth
              label="Создан"
              value={product?.createdAt}
              sx={{ my: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
            <TextField
              fullWidth
              label="Категория"
              {...register("category")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
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
            <TextField
              fullWidth
              label="Статус"
              {...register("tags")}
              sx={{ my: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />{" "}
            <TextField
              fullWidth
              label="Изображения"
              {...register("title")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
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
            <TextField
              multiline
              rows={4}
              fullWidth
              label="Описание"
              {...register("description")}
              sx={{ my: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Edit>
  );
};
