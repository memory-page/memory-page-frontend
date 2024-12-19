/// <reference types="vite/client" />

interface ImportMeta {
  globEager<T = unknown>(pattern: string): Record<string, T>;
}