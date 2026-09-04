import {
  lazy,
  useEffect,
  useMemo,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layout/RootLayout";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { routePreloader } from "@/lib/routePreloader";

const HomePage = lazy(() => import("@/feature/Home/pages/HomePage"));
const HomePageV2 = lazy(() => import("@/feature/Home/pages/HomePageV2"));
const AboutPage = lazy(() => import("@/feature/About/pages/AboutPage"));
const ProductsPage = lazy(() => import("@/feature/Products/pages/ProductsPage"));
const ProductDetailPage = lazy(
  () => import("@/feature/Products/pages/ProductDetailPage"),
);
const ContactPage = lazy(() => import("@/feature/Contact/pages/ContactPage"));
const NotFoundPage = lazy(() => import("@/feature/NotFound/pages/NotFoundPage"));
const IndustriesPage = lazy(
  () => import("@/feature/Industries/pages/IndustriesPage"),
);
const LegalPage = lazy(() => import("@/feature/Legal/pages/LegalPage"));
const DemoPage = lazy(() => import("@/feature/Demo/pages/DemoPage"));

const wrap = (Page: LazyExoticComponent<ComponentType>) => (
  <ErrorBoundary>
    <Page />
  </ErrorBoundary>
);

/**
 * Mounts the router and warms lazy chunks for routes the user is likely to
 * visit next. Only this component is exported from this module so that Fast
 * Refresh keeps working without complaint.
 */
export function AppRoutes() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        {
          path: "/",
          element: <RootLayout />,
          errorElement: wrap(NotFoundPage),
          children: [
            { index: true, element: wrap(HomePage) },
            { path: "v2", element: wrap(HomePageV2) },
            { path: "about", element: wrap(AboutPage) },
            { path: "products", element: wrap(ProductsPage) },
            { path: "products/:slug", element: wrap(ProductDetailPage) },
            { path: "industries", element: wrap(IndustriesPage) },
            { path: "contact", element: wrap(ContactPage) },
            { path: "privacy", element: <LegalPage slug="privacy" /> },
            { path: "terms", element: <LegalPage slug="terms" /> },
            { path: "compliance", element: <LegalPage slug="compliance" /> },
            { path: "sitemap", element: <LegalPage slug="sitemap" /> },
            { path: "demo", element: wrap(DemoPage) },
            { path: "404", element: wrap(NotFoundPage) },
            { path: "*", element: <Navigate to="/404" replace /> },
          ],
        },
      ]),
    [],
  );

  useEffect(() => {
    const ric = (window as Window & {
      requestIdleCallback?: (cb: () => void) => number;
      cancelIdleCallback?: (h: number) => void;
    }).requestIdleCallback;
    const cic = (window as Window & {
      cancelIdleCallback?: (h: number) => void;
    }).cancelIdleCallback;

    const handle: number =
      typeof ric === "function"
        ? ric.call(window, routePreloader)
        : (window.setTimeout(routePreloader, 1500) as unknown as number);

    return () => {
      if (typeof cic === "function") cic.call(window, handle);
      else window.clearTimeout(handle);
    };
  }, []);

  return <RouterProvider router={router} />;
}