import { HttpError } from "@pankod/refine-core";
import {
  Create,
  TextField,
  useAutocomplete,
  Grid,
  Paper,
  Box,
} from "@pankod/refine-mui";
import { useForm } from "@pankod/refine-react-hook-form";
import { created } from "../../components/created";

import { IProduct, ICategory } from "interfaces";

export const ProductsCreate: React.FC = () => {
  const {
    saveButtonProps,
    register,
    control,
    formState: { errors },
  } = useForm<IProduct, HttpError, IProduct & { category: ICategory }>();

  const { autocompleteProps } = useAutocomplete<ICategory>({
    resource: "categories",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
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
              {...register("article")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
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
              fullWidth
              label="Статус"
              {...register("tags")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />{" "}
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
            {" "}
            <TextField
              disabled
              fullWidth
              value={created()}
              label="Создан"
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
            <Box display="none">
              <input value={created()} {...register("createdAt")} />{" "}
            </Box>
            <TextField
              fullWidth
              label="Изображения"
              {...register("title")}
              sx={{ mt: 1, fontSize: { xs: "18px" }, fontWeight: "300" }}
            />
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
    </Create>
  );
};
