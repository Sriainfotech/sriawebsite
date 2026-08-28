// Small helper for ImageKit-hosted images whose URL doesn't already carry
// a `?tr=f-auto,q-auto,w-NNN` transform — specifically blog post cover
// images, which are stored exactly as the admin upload returned them
// (src/pages/admin/PostForm.tsx), with no resize/compression applied at
// delivery. A live PageSpeed audit measured one such image shipping at its
// full 1280x633 upload size into a ~712x534 display box, wasting ~80KB on
// a single homepage load. Every other image on the site already gets this
// via a literal `?tr=...` in its hardcoded URL; this covers the one class
// of image whose URL is dynamic (comes from the CMS, not a source
// constant) so it can't be hardcoded the same way.
const IMAGEKIT_HOST = "ik.imagekit.io";

function withTransform(url: string, width: number): string | null {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return null;
  }
  if (parsed.hostname !== IMAGEKIT_HOST) return null;

  const existing = parsed.searchParams.get("tr") ?? "";
  const withoutWidth = existing.replace(/,?w-\d+/, "").replace(/^,/, "");
  const withFormat = withoutWidth.includes("f-auto") ? withoutWidth : ["f-auto,q-auto", withoutWidth].filter(Boolean).join(",");
  parsed.searchParams.set("tr", `${withFormat},w-${width}`);
  return parsed.toString();
}

/** Returns a resized URL for display, or the original URL unchanged if it isn't an ImageKit asset. */
export function ikSrc(url: string, width: number): string {
  return withTransform(url, width) ?? url;
}

/** Returns a `srcSet` string across the given widths, or undefined if this isn't an ImageKit asset (caller should omit the srcSet attribute entirely in that case). */
export function ikSrcSet(url: string, widths: number[]): string | undefined {
  const entries = widths
    .map((w) => {
      const resized = withTransform(url, w);
      return resized ? `${resized} ${w}w` : null;
    })
    .filter((e): e is string => e !== null);
  return entries.length > 0 ? entries.join(", ") : undefined;
}
