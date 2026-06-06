/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH?: string;
  readonly VITE_CLIENT_PORTAL_URL?: string;
  readonly VITE_SITE_URL?: string;
  readonly VITE_CONTACT_SUBMIT_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
