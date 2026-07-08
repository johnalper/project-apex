# Project Apex

A headless commerce architecture utilizing Shopify Hydrogen and Sanity CMS within a monorepo setup.

This repository serves as a practical demonstration of managing a decoupled storefront and a headless content layer. To model enterprise patterns without requiring a proprietary AEM license, Sanity CMS is used here to mimic content services alongside Hydrogen's storefront capabilities.

### Current Architecture

The project is structured to keep the presentation and content authoring completely separate while managing them under a single monorepo workspace.

- Monorepo: Organized with Turborepo (v2.10.1), utilizing the modern devEngines.packageManager configuration to enforce deterministic workspace builds.
- Headless CMS: Powered by Sanity, simulating content fragmentation and structured schemas.
- Headless Storefront: Built on Shopify Hydrogen for dynamic rendering and routing.
- Mock Commerce Layer: Leverages live Mock.shop data to simulate catalog inventory without requiring authentication setup.

### Local Development & Installation

The workspace is configured for minimal local setup. pnpm is required and enforced by the workspace engine config.

Install dependencies:
```bash
pnpm install
```

Start both applications concurrently:
```bash
pnpm run dev
```

Test the optimized build pipeline:
```bash
pnpm run build
```

Once the dev script is running, the decoupled instances are available at:

- Hydrogen Storefront: `http://localhost:3000`
- Sanity CMS Studio: `http://localhost:3333`

### Next Steps

The repository currently provides a successfully running, decoupled storefront and CMS foundation, however, still work in progress. Below are the initial goals yet to be implemented:

- ~~**Data Fetching Layer:** Integrating the Sanity data pipeline into Hydrogen's loaders to stitch the CMS content into the storefront.~~ (done)
- **Localization:** Implementing routing on top of the established multi-language URL structure to simulate multi-market platform requirements.

