# Kaveri Industries SEO Archive (temp.md)
> Generated archive of all existing SEO configurations, schemas, and metadata across the Kaveri Industries codebase before consolidation.

---

## 1. Company Identity & Baseline Metadata (`src/lib/company.ts`)

- **Name**: Kaveri Industries
- **Short Name**: Kaveri
- **Legal Name**: Kaveri Industries
- **Wordmark**: KAVERI INDUSTRIES
- **Monogram**: K
- **URL**: `https://kaveri.agsdemo.in` (fallback to `VITE_SITE_URL`)
- **Logo**: `https://kaveri.agsdemo.in/og/logo.webp`
- **Locale**: `en_IN`
- **Twitter Handle**: `@kaveri_industries`
- **Founding Date**: `2008`
- **ISO Standard**: `ISO 9001:2008`
- **Certification Statement**: `An ISO 9001 : 2008 Certified Company`
- **Tagline**: `Manufacturers of High Tensile MS Fasteners`
- **Description**: `Manufacturers of High Tensile MS Fasteners for transmission & telecommunication towers, buildings & bridges, refineries & water treatment plants, wind & power plants, railways & transportation, and road guard rail systems. An ISO 9001 Certified Company.`
- **Contact Details**:
  - Primary Email: `kaveriindustries4@hotmail.com`
  - Sales Email: `kaveriindustries4@hotmail.com`
  - Legal Email: `kaveriindustries4@hotmail.com`
  - Phones:
    - Display: `080 - 27825275`, Tel: `+918027825275`
    - Display: `080 - 27825276`, Tel: `+918027825276`
  - Fax: Display: `080 - 26782341`, Tel: `+918026782341`
- **Address**:
  - Street: `Survey No. 485, 486 Jigani Industrial Area 2nd Phase`
  - City: `Bangalore`
  - Region: `Karnataka`
  - Postal Code: `560105`
  - Country: `IN`
  - Full Address: `Survey No. 485, 486, Jigani Industrial Area 2nd Phase, Bangalore - 560105`
  - Geo Coordinates: `lat: 12.7842, lng: 77.6369`
- **Business Hours**:
  - Monday–Friday: 09:00 – 18:00
  - Saturday: 09:00 – 13:00
  - Sunday: Closed
- **Social Profiles**:
  - `https://www.linkedin.com/company/kaveri-industries`
  - `https://www.facebook.com/kaveriindustries`
  - `https://twitter.com/kaveri_industries`
  - `https://www.youtube.com/@kaveri-industries`

---

## 2. Route-by-Route SEO Metadata & Schemas

### 2.1 Homepage (`/`)
- **Source**: `src/feature/Home/seo/homeSeo.ts`
- **Title**: `High Tensile MS Fasteners Manufacturer | Kaveri Industries`
- **Description**: `Kaveri Industries manufactures high tensile MS fasteners, bolts, nuts, U-bolts and washers for towers, infrastructure, power, railways and industrial applications.`
- **Path**: `/`
- **Keywords**:
  - high tensile fasteners
  - MS fasteners manufacturer
  - hex head bolts
  - HSFG bolts
  - foundation bolts
  - guard rail bolts
  - hot dip galvanised fasteners
  - U-bolts
  - center bolts
  - washers IS 2016 IS 3063
  - transmission tower fasteners
  - ISO 9001:2008 fasteners
  - Jigani Bangalore fasteners
- **Image**: `https://agsdemo.in/kaveri/api/assets/images/web_images/images/home/home_banner_image.webp`
- **Image Alt**: `Kaveri Industries — manufacturers of high-tensile MS fasteners for transmission towers, refineries, railways, and structural infrastructure`
- **Schemas**:
  - `Service` entries for Target Sectors (`sectorsSchema()` from `src/feature/Home/api/sectorsSchema.ts`):
    - Transmission & Telecom Towers (`/contact?sector=transmission-telecom`)
    - Buildings & Bridges (`/contact?sector=buildings-bridges`)
    - Refineries & Water Treatment (`/contact?sector=refineries-water`)
    - Wind & Power Plants (`/contact?sector=wind-power`)
    - Railways & Transportation (`/contact?sector=railways-transport`)
    - Road Guard Rail Systems (`/contact?sector=guard-rails`)

### 2.2 About Page (`/about`)
- **Source**: `src/feature/About/seo/aboutSeo.ts`
- **Title**: `About Kaveri Industries | High Tensile Fasteners Manufacturer`
- **Description**: `Learn about Kaveri Industries, a manufacturer of high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.`
- **Path**: `/about`
- **Breadcrumb**:
  - Home: `/`
  - About Us: `/about`

### 2.3 Products Catalog Page (`/products`)
- **Source**: `src/feature/Products/seo/productsSeo.ts`
- **Title**: `High Tensile Fasteners & Bolts Manufacturer | Kaveri Industries`
- **Description**: `Explore high tensile MS fasteners from Kaveri Industries, including hex bolts, nuts, studs, washers, U-bolts and center bolts for industrial applications.`
- **Path**: `/products`
- **Type**: `product`
- **Breadcrumb**:
  - Home: `/`
  - Products: `/products`

### 2.4 Product Detail Pages (`/products/:slug`)
- **Source**: `src/feature/Products/seo/productDetailSeo.ts`
- **Title**: `{product.name} | Kaveri Industries`
- **Description**: `{product.shortDescription}`
- **Path**: `/products/{product.slug}`
- **Type**: `product`
- **Image**: `{product.imageUrl}`
- **Image Alt**: `{product.name}`
- **Schemas**:
  - `Product` schema (`name`, `description`, `image`, `sku: ID.toUpperCase()`, `brand: Kaveri Industries`, `manufacturer: Kaveri Industries`)
  - `BreadcrumbList` schema (`Home -> Products -> {product.name}`)

### 2.5 Industries Page (`/industries`)
- **Source**: `src/feature/Industries/seo/industriesSeo.ts`
- **Title**: `Industries Served by High Tensile Fasteners | Kaveri Industries`
- **Description**: `Kaveri Industries supplies high tensile MS fasteners for telecom towers, buildings, bridges, refineries, power plants, railways and guard rails.`
- **Path**: `/industries`
- **Breadcrumb**:
  - Home: `/`
  - Industries: `/industries`

### 2.6 RDSO Vendor Approval Page (`/rdso-approval`)
- **Source**: `src/feature/VendorApproval/seo/vendorApprovalSeo.ts`
- **Title**: `RDSO Approval | Kaveri Industries`
- **Description**: `Kaveri Industries is an authorized RDSO approved vendor for high tensile MS fasteners, studs, U-bolts, and washers for Indian Railways infrastructure.`
- **Path**: `/rdso-approval`
- **Breadcrumb**:
  - Home: `/`
  - RDSO Approval: `/rdso-approval`

### 2.7 Machinery & Facilities Page (`/machinery`)
- **Source**: `src/feature/Machinery/seo/machinerySeo.ts`
- **Title**: `Machinery & Facilities | Kaveri Industries`
- **Description**: `Kaveri Industries manufacturing facilities: CNC turning centres, VMC machines, lathes, drilling & milling equipment, and precision metrology inspection.`
- **Path**: `/machinery`
- **Breadcrumb**:
  - Home: `/`
  - Machinery: `/machinery`

### 2.8 Contact Page (`/contact`)
- **Source**: `src/feature/Contact/seo/contactSeo.ts`
- **Title**: `Contact Kaveri Industries | MS Fasteners & Bolt Manufacturer`
- **Description**: `Contact Kaveri Industries for high tensile MS fasteners, bolts, nuts, U-bolts and washers for industrial and infrastructure applications.`
- **Path**: `/contact`
- **Breadcrumb**:
  - Home: `/`
  - Contact: `/contact`

### 2.9 Certifications Page (`/certificate`)
- **Source**: `src/feature/Certificate/seo/certificateSeo.ts`
- **Title**: `Certifications & Approvals | Kaveri Industries`
- **Description**: `View Kaveri Industries official quality certifications and approvals including ISO 9001:2015, RDSO Indian Railways, and BIS conformity for fasteners.`
- **Path**: `/certificate`
- **Breadcrumb**:
  - Home: `/`
  - Certifications: `/certificate`

### 2.10 Legal Pages (`/privacy`, `/terms`, `/compliance`, `/sitemap`)
- **Source**: `src/feature/Legal/pages/LegalPage.tsx`
- **Privacy Policy**:
  - Title: `Privacy Policy`
  - Path: `/privacy`
  - Noindex: `true`
  - Description: `Kaveri Industries collects only the contact information you voluntarily submit through our enquiry and quote-request forms. We do not sell, rent, or share your data with third parties.`
- **Terms of Service**:
  - Title: `Terms of Service`
  - Path: `/terms`
  - Noindex: `true`
  - Description: `By using kaveri.agsdemo.in you agree to the acceptable-use terms set out in our master supply agreement.`
- **Compliance**:
  - Title: `Compliance`
  - Path: `/compliance`
  - Noindex: `true`
  - Description: `Kaveri Industries operates under ISO 9001:2008 and follows the relevant IS / ISO / ASTM standards for every product line.`
- **Sitemap HTML**:
  - Title: `Sitemap`
  - Path: `/sitemap`
  - Noindex: `true`
  - Description: `Browse all sections of the Kaveri Industries website from one place — products, industries, and contact.`

### 2.11 Internal Demo / Showcase (`/demo`)
- **Source**: `src/feature/Demo/seo/demoSeo.ts`
- **Title**: `Component Showcase`
- **Description**: `Internal showcase of isolated UI primitives used across the Kaveri Industries site.`
- **Path**: `/demo`
- **Noindex**: `true`

### 2.12 404 Not Found (`/404`)
- **Source**: `src/feature/NotFound/seo/notFoundSeo.ts`
- **Title**: `Page not found`
- **Path**: `/404`
- **Noindex**: `true`

---

## 3. Core Schemas & Helpers (`src/lib/schemas.ts`)
- `organizationSchema()`: Unified `["Organization", "LocalBusiness"]` entity with `@id: https://kaveri.agsdemo.in/#organization`. Includes address, geo coordinates, openingHoursSpecification, contactPoint (sales).
- `websiteSchema()`: `@type: "WebSite"` with `@id: https://kaveri.agsdemo.in/#website`.
- `breadcrumbSchema(items)`: `@type: "BreadcrumbList"` with `itemListElement` array of `ListItem`.
- `productSchema(p)`: `@type: "Product"` with name, description, image, sku, brand, manufacturer.
- `faqSchema(qa)`: `@type: "FAQPage"` with `mainEntity` array of questions and accepted answers.
- `serviceSchema(s)`: `@type: "Service"` with serviceType, name, description, url, provider, areaServed.
- `articleSchema(a)`: `@type: "Article"` with headline, description, image, dates, author, publisher.

---

## 4. Product Slugs in Catalogue (`src/feature/Products/api/products.ts`)
The product catalogue defines the following products and slugs:
1. `hex-head-bolts-nuts` (Hex Head Bolts & Nuts)
2. `hsfg-bolts` (High Strength Friction Grip - HSFG Bolts)
3. `foundation-bolts` (Foundation / Anchor Bolts)
4. `u-bolts` (Industrial U-Bolts & Clamps)
5. `center-bolts` (Automotive & Leaf Spring Center Bolts)
6. `washers` (Plain, Spring & Conical Washers)
7. `threaded-rods-studs` (Continuous Threaded Rods & Studs)
8. `guard-rail-fasteners` (Highway Crash Barrier / Guard Rail Fasteners)
