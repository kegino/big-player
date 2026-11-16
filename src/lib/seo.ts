export const SITE_URL = "https://bigplayer.website";
export const SITE_NAME = "Big Player";
export const SITE_TAGLINE = "O Player Gigante em Estabilidade e Conteúdo IPTV em 4K";
export const SITE_DESCRIPTION = "Big Player: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://bigplayer.website/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}
