import Home from "../pages/Home";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Babies from "../pages/Babies";
import Privacy from "../pages/Privacy";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    id: 1,
    path: "/",
    name: "home",
    label: 'home',
    element: <Home />,
  },
  {
    id: 2,
    path: "/men",
    name: "men",
    label: 'Мужское',
    element: <Men />,
  },
  {
    id: 3,
    path: "/women",
    name: "women",
    label: 'Женское',
    element: <Women />,
  },
  {
    id: 4,
    path: "/babies",
    name: "baby",
    label: 'Детские',
    element: <Babies />,
  },
  {
    id: 5,
    path: "/security",
    name: "security",
    label: 'Безопасная Сделка',
    element: <Privacy />,
  },
  {
    id: 6,
    path: "*",
    label: 'Правило Пользование',
    name: "not found",
    element: <NotFound />,
  },
];
