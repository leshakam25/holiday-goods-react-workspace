import React from "react";
import CategoryIcon from "@mui/icons-material/Category";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-mui";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { Title, Sider, Layout, Header } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { ProductsList, ProductsCreate, ProductsEdit } from "pages/products";
import { authProvider } from "./authProvider";

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:3200")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={AuthPage}
          resources={[
            {
              name: "products",
              list: ProductsList,
              create: ProductsCreate,
              edit: ProductsEdit,
              icon: <CategoryIcon />,
            },
          ]}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
