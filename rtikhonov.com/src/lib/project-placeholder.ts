/** Deterministic abstract placeholder from a string seed (slug/title). */
export function placeholderSvg(seed: string): string {
	const h = hash(seed);
	const palette = pickPalette(h);
	const [c1, c2, c3] = palette;

	const rot = h % 360;
	const cx = 20 + (h % 60);
	const cy = 15 + ((h >> 3) % 50);
	const r1 = 40 + ((h >> 6) % 50);
	const r2 = 30 + ((h >> 9) % 40);
	const x2 = 50 + ((h >> 12) % 50);
	const y2 = 40 + ((h >> 15) % 40);

	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="560" height="320" role="img" aria-hidden="true">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="560" height="320" fill="url(#g)"/>
  <g opacity="0.55" transform="rotate(${rot} 280 160)">
    <circle cx="${cx * 4}" cy="${cy * 3}" r="${r1}" fill="${c3}"/>
    <circle cx="${x2 * 5}" cy="${y2 * 4}" r="${r2}" fill="${c1}" opacity="0.7"/>
    <rect x="${80 + (h % 100)}" y="${60 + ((h >> 4) % 80)}" width="${120 + (h % 80)}" height="${80 + ((h >> 7) % 60)}" rx="24" fill="${c3}" opacity="0.35"/>
  </g>
  <circle cx="${400 - (h % 120)}" cy="${200 - ((h >> 5) % 100)}" r="${50 + (h % 40)}" fill="${c2}" opacity="0.4"/>
</svg>`;
}

function hash(s: string): number {
	let h = 2166136261;
	for (let i = 0; i < s.length; i++) {
		h ^= s.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}

/** Muted palettes that work in light/dark — not purple-gradient AI defaults. */
function pickPalette(h: number): [string, string, string] {
	const palettes: [string, string, string][] = [
		["#e8e4df", "#c4b8a8", "#8a7f72"],
		["#dde5e8", "#9bb0b8", "#5c6f78"],
		["#e6e2d8", "#b8a99a", "#6e6358"],
		["#e2e8e4", "#a3b5aa", "#5a6b62"],
		["#ebe6e0", "#c9b7a6", "#7a6a5c"],
		["#e4e4ea", "#a8a8bc", "#646478"],
		["#e8e8e0", "#b0b8a0", "#687060"],
		["#eae4e8", "#c0a8b4", "#786068"],
	];
	return palettes[h % palettes.length];
}
