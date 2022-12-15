import React from "react";
import { useNavigation, useSelect } from "@pankod/refine-core";
import {
  useDataGrid,
  DataGrid,
  GridColumns,
  List,
  Stack,
  EditButton,
  DeleteButton,
} from "@pankod/refine-mui";

import { IProduct, ICategory } from "interfaces";

export const ProductsList: React.FC = () => {
  const { dataGridProps } = useDataGrid<IProduct>();
  const { edit, show } = useNavigation();

  const {
    options,
    queryResult: { isLoading },
  } = useSelect<ICategory>({
    resource: "products",
    hasPagination: false,
  });

  const columns = React.useMemo<GridColumns<IProduct>>(
    () => [
      {
        field: "article",
        headerName: "Артикул",
        type: "number",
        minWidth: 100,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "images",
        headerName: "Изображение",
        type: "string",
        minWidth: 160,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "title",
        headerName: "Название товара",
        type: "string",
        minWidth: 200,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "category",
        headerName: "Категория",
        type: "string",
        minWidth: 150,
        headerAlign: "left",
        align: "center",
      },
      {
        field: "status",
        headerName: "Статусы",
        type: "string",
        minWidth: 140,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "description",
        headerName: "Описание",
        type: "string",
        minWidth: 220,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "createdAt",
        headerName: "Создан",
        type: "string",
        minWidth: 220,
        headerAlign: "left",
        align: "left",
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Действия",
        renderCell: function render({ row }) {
          return (
            <Stack direction="row" spacing={1}>
              <EditButton size="small" hideText recordItemId={row.id} />
              <DeleteButton size="small" hideText recordItemId={row.id} />
            </Stack>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    [options, isLoading]
  );

  return (
    <List title="Список товаров" resource="products">
      <DataGrid
        {...dataGridProps}
        onRowClick={({ id }) => {
          show("products", id);
        }}
        columns={columns}
        autoHeight
      />
    </List>
  );
};
