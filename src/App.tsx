import { useRoutes } from "react-router-dom";
import { appRoutes } from "./routes/Routes";
import type { JSX } from "react";


export default function App(): JSX.Element {
  const routes = useRoutes(appRoutes);
  return <>{routes}</>;
}