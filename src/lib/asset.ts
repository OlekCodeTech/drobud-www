/** Ścieżka do pliku z public/ z uwzględnieniem base path (podgląd na GitHub Pages). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => (path.startsWith("/") ? `${basePath}${path}` : path);
