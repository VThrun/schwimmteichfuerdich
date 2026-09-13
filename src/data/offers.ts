import type { VisualKey } from './media';

export type OfferPricing = {
	diyFrom: number | null;
	turnkeyFrom: number | null;
};

export type Offer = {
	slug: string;
	title: string;
	category: 'Vollverbau' | 'Naturpool' | 'Teilverbaute Variante' | 'Individuell';
	description: string;
	visual: VisualKey;
	pricing: OfferPricing;
	diyTasks: string[];
	professionalTasks: string[];
};

export const formatPrice = (price: number | null) =>
	price === null
		? 'Preis auf Anfrage'
		: `ab ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(price)}`;

const standardDiyTasks = [
	'Aushub und Gelände vorbereiten',
	'Pflanzflächen mitgestalten',
	'Wasserpflanzen selbst einsetzen',
];

const standardProfessionalTasks = [
	'Planung und technische Abstimmung',
	'Holzverbau, Folie und Anschlüsse',
	'Inbetriebnahme und Einweisung',
];

export const offers: Offer[] = [
	{
		slug: 'saunateich',
		title: 'Saunateich',
		category: 'Vollverbau',
		description: 'Eine kompakte Lösung für Abkühlung und kleine Gartenbereiche.',
		visual: 'compact',
		pricing: { diyFrom: 12900, turnkeyFrom: 24900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'schwimmteich-kompakt',
		title: 'Schwimmteich – kompakte Variante',
		category: 'Vollverbau',
		description: 'Natürliches Badeerlebnis mit umlaufend gestalteter Uferzone.',
		visual: 'compact',
		pricing: { diyFrom: 18900, turnkeyFrom: 34900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'schwimmteich-grosszuegig',
		title: 'Schwimmteich – großzügige Variante',
		category: 'Vollverbau',
		description: 'Mehr Raum für längere Schwimmzüge und eine weitläufige Bepflanzung.',
		visual: 'generous',
		pricing: { diyFrom: 24900, turnkeyFrom: 44900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'schwimmteich-premium',
		title: 'Schwimmteich Premium',
		category: 'Vollverbau',
		description: 'Die großzügigste vorbereitete Variante mit klar gegliederten Zonen.',
		visual: 'generous',
		pricing: { diyFrom: 31900, turnkeyFrom: 59900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'tauchbecken',
		title: 'Tauchbecken',
		category: 'Naturpool',
		description: 'Reduzierte Form für wenig Platz und die Erfrischung nach der Sauna.',
		visual: 'compact',
		pricing: { diyFrom: 9900, turnkeyFrom: 19900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'naturpool',
		title: 'Naturpool',
		category: 'Naturpool',
		description: 'Geradlinige Gestaltung verbindet sich mit natürlicher Wasseraufbereitung.',
		visual: 'linear',
		pricing: { diyFrom: 21900, turnkeyFrom: 39900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'badeteich',
		title: 'Badeteich',
		category: 'Teilverbaute Variante',
		description: 'Eine reduzierte Konstruktion mit naturnah gestaltetem Pflanzbereich.',
		visual: 'compact',
		pricing: { diyFrom: 14900, turnkeyFrom: 29900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'schwimmteich-teilverbaut',
		title: 'Schwimmteich – teilverbaut',
		category: 'Teilverbaute Variante',
		description: 'Für längere Bahnen mit sichtbar bleibender Folie im Schwimmbereich.',
		visual: 'linear',
		pricing: { diyFrom: 19900, turnkeyFrom: 36900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'schwimmteich-langformat',
		title: 'Schwimmteich – Langformat',
		category: 'Teilverbaute Variante',
		description: 'Eine weitere vorbereitete Größe für langgestreckte Grundstücke.',
		visual: 'linear',
		pricing: { diyFrom: 26900, turnkeyFrom: 48900 },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
	{
		slug: 'bauen-nach-wunsch',
		title: 'Bauen nach Wunsch',
		category: 'Individuell',
		description: 'Planung entlang der Wünsche und der baulichen Bedingungen vor Ort.',
		visual: 'generous',
		pricing: { diyFrom: null, turnkeyFrom: null },
		diyTasks: standardDiyTasks,
		professionalTasks: standardProfessionalTasks,
	},
];
