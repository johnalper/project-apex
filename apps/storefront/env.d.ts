/// <reference types="vite/client" />
/// <reference types="react-router" />
/// <reference types="@shopify/oxygen-workers-types" />
/// <reference types="@shopify/hydrogen/react-router-types" />

// Enhance TypeScript's built-in typings.
import '@total-typescript/ts-reset';

// Sanity Variables (keeping it simple)
interface Env {
    SESSION_SECRET: string;
    PUBLIC_STORE_DOMAIN: string;
    PUBLIC_SANITY_PROJECT_ID: string;
    PUBLIC_SANITY_DATASET: string;
    PUBLIC_SANITY_API_VERSION: string;
}
