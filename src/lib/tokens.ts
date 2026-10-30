// Reads tokens/tokens.css at build time so the reference site always shows exactly what's in the file.
// Groups follow the /* Comment */ headings in tokens.css.
import css from '../../tokens/tokens.css?raw';

export type Token = { name: string; value: string };
export type TokenGroup = { title: string; tokens: Token[] };

export const tokenGroups: TokenGroup[] = (() => {
  const groups: TokenGroup[] = [];
  for (const line of css.split('\n')) {
    const heading = line.match(/^\s*\/\*\s*(.+?)(?:\s*\(.*)?\s*\*\/\s*$/);
    if (heading && !line.includes('Design tokens')) {
      groups.push({ title: heading[1], tokens: [] });
      continue;
    }
    const token = line.match(/^\s*(--[\w-]+):\s*(.+?);/);
    if (token && groups.length) groups.at(-1)!.tokens.push({ name: token[1], value: token[2] });
  }
  return groups;
})();

export const group = (title: string) => tokenGroups.find(g => g.title === title)?.tokens ?? [];

/** Brand colour ranges: --wtc-blue-500 → { blue: [...] } */
export const palettes = (() => {
  const out: Record<string, Token[]> = {};
  for (const t of group('Brand colours')) {
    const name = t.name.match(/^--wtc-(\w+)-\d+$/)?.[1];
    if (name) (out[name] ??= []).push(t);
  }
  return out;
})();
