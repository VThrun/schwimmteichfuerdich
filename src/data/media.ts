import type { ImageMetadata } from 'astro';
import compactGardenPond from '../assets/images/compact-garden-pond.jpg';
import diyPlanting from '../assets/images/diy-planting.jpg';
import eveningByThePond from '../assets/images/evening-by-the-pond.jpg';
import gardenLandscaping from '../assets/images/garden-landscaping.jpg';
import generousTimberPond from '../assets/images/generous-timber-pond.jpg';
import linearNaturalPool from '../assets/images/linear-natural-pool.jpg';
import pondBiotope from '../assets/images/pond-biotope.jpg';

export type VisualKey =
	| 'compact'
	| 'generous'
	| 'linear'
	| 'evening'
	| 'diy'
	| 'biotope'
	| 'landscaping';

export type SiteVisual = {
	src: ImageMetadata;
	alt: string;
	caption: string;
};

export const visuals: Record<VisualKey, SiteVisual> = {
	compact: {
		src: compactGardenPond,
		alt: 'Visualisierung eines kompakten, bepflanzten Schwimmteichs mit Holzterrasse in einem kleinen Garten',
		caption: 'Kompakte Gartenoase · KI-Visualisierung',
	},
	generous: {
		src: generousTimberPond,
		alt: 'Visualisierung eines großzügigen naturnahen Schwimmteichs mit breiter Holzterrasse',
		caption: 'Großzügiger Schwimmteich · KI-Visualisierung',
	},
	linear: {
		src: linearNaturalPool,
		alt: 'Visualisierung eines geradlinigen Naturpools mit dunklem Wasser, Holz und dichter Bepflanzung',
		caption: 'Geradlinig und natürlich · KI-Visualisierung',
	},
	evening: {
		src: eveningByThePond,
		alt: 'Füße am Wasser eines naturnahen Teichs in warmer Abendstimmung',
		caption: 'Abends am eigenen Wasser · KI-Visualisierung',
	},
	diy: {
		src: diyPlanting,
		alt: 'Hände setzen Wasserpflanzen am Rand eines natürlich gebauten Teichs ein',
		caption: 'Eigenleistung bei der Bepflanzung · KI-Visualisierung',
	},
	biotope: {
		src: pondBiotope,
		alt: 'Libelle, Frosch und Wasserpflanzen am naturnahen Teichufer',
		caption: 'Lebendiger Lebensraum · KI-Visualisierung',
	},
	landscaping: {
		src: gardenLandscaping,
		alt: 'Visualisierung einer Gartengestaltung mit Holzterrasse, Natursteinmauer und Schwimmteich',
		caption: 'Garten, Terrasse und Wasser als Einheit · KI-Visualisierung',
	},
};

export const galleryVisuals = [
	visuals.generous,
	visuals.evening,
	visuals.compact,
	visuals.biotope,
	visuals.linear,
	visuals.diy,
	visuals.landscaping,
];
