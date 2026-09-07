import { AppRoutes } from "@/routes/routes";
import { QuoteModalProvider } from "@/context/QuoteModalContext";

/** App shell — mounts the router and global modal providers. */
function App() {
  return (
    <QuoteModalProvider>
      <AppRoutes />
    </QuoteModalProvider>
  );
}

export default App;