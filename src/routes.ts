// Criar arquivo src/routes.ts para definir as rotas usadas no ViteSSG

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", component: Index },
  { path: "*", component: NotFound },
];

export default routes;
