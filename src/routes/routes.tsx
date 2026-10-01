import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { LoadingFallback } from "@/components/common/LoadingFallback";
import { RootLayout } from "@/components/layout/RootLayout";
import {
  Suspense,
  lazy,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "@/feature/Home/pages/HomePage";
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
const VendorApprovalPage = lazy(
  () => import("@/feature/VendorApproval/pages/VendorApprovalPage"),
);
const MachineryPage = lazy(
  () => import("@/feature/Machinery/pages/MachineryPage"),
);
const LegalPage = lazy(() => import("@/feature/Legal/pages/LegalPage"));
const DemoPage = lazy(() => import("@/feature/Demo/pages/DemoPage"));

const wrapNode = (node: ReactNode): ReactNode => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {node}
    </Suspense>
  </ErrorBoundary>
);

const wrap = (Page: LazyExoticComponent<ComponentType>): ReactNode =>
  wrapNode(<Page />);

/**
 * Mounts the router and warms lazy chunks for routes the user is likely to
 * visit next. Only this component is exported from this module so that Fast
 * Refresh keeps working without complaint.
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: wrap(NotFoundPage),
    children: [
      { index: true, element: <ErrorBoundary><HomePage /></ErrorBoundary> },
      { path: "v2", element: wrap(HomePageV2) },
      { path: "about", element: wrap(AboutPage) },
      { path: "products", element: wrap(ProductsPage) },
      { path: "products/:slug", element: wrap(ProductDetailPage) },
      { path: "industries", element: wrap(IndustriesPage) },
      { path: "rdso-approval", element: wrap(VendorApprovalPage) },
      { path: "vendor-approval", element: <Navigate to="/rdso-approval" replace /> },
      { path: "vendor-approvals", element: <Navigate to="/rdso-approval" replace /> },
      { path: "certificate/vendor-approval", element: <Navigate to="/rdso-approval" replace /> },
      { path: "machinery", element: wrap(MachineryPage) },
      { path: "infrastructure/machinery", element: <Navigate to="/machinery" replace /> },
      { path: "certificate", element: <Navigate to="/rdso-approval" replace /> },
      { path: "certificates", element: <Navigate to="/rdso-approval" replace /> },
      { path: "contact", element: wrap(ContactPage) },
            { path: "privacy", element: wrapNode(<LegalPage slug="privacy" />) },
            { path: "terms", element: wrapNode(<LegalPage slug="terms" />) },
            { path: "compliance", element: wrapNode(<LegalPage slug="compliance" />) },
            { path: "sitemap", element: wrapNode(<LegalPage slug="sitemap" />) },
      { path: "demo", element: wrap(DemoPage) },
      { path: "404", element: wrap(NotFoundPage) },
      { path: "*", element: <Navigate to="/404" replace /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}