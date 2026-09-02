import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { SEO } from "@/components/common/SEO";
import { productSchema } from "@/lib/schemas";
import { productsSEO, productsBreadcrumb } from "@/feature/Products/seo/productsSeo";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  sku: string;
}

export default function ProductsPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.get<Product[]>("/products"),
  });

  const schema = data?.length
    ? {
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: data.map((p, i) => ({
          ...productSchema({
            name: p.name,
            description: p.description,
            image: p.image,
            sku: p.sku,
          }),
          position: i + 1,
        })),
      }
    : productsBreadcrumb();

  return (
    <>
      <SEO {...productsSEO} schema={schema} />
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Products</h1>
      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading products…</p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(data ?? []).map((p) => (
            <li
              key={p.id}
              className="rounded-lg border border-border p-4 transition-colors hover:bg-accent/40"
            >
              <h2 className="font-medium">{p.name}</h2>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}