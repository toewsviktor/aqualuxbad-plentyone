/**
 * Normalizes a user provided size value into a valid CSS dimension.
 * Accepts a raw pixel number (e.g. "150"), an explicit unit ("150px", "50%"),
 * or "auto"/empty for proportional scaling.
 */
export const toCssDimension = (value: string | undefined): string => {
  const trimmed = (value ?? '').toString().trim();
  if (!trimmed || trimmed.toLowerCase() === 'auto') return 'auto';
  return /^\d+(\.\d+)?$/.test(trimmed) ? `${trimmed}px` : trimmed;
};
