export type Offer = {
	slug: string;
	title: string;
	category: 'Vollverbau' | 'Naturpool' | 'Teilverbaute Variante' | 'Individuell';
	description: string;
	visual: 'water' | 'leaf' | 'sand';
	priceLabel: string;
	customPrice?: boolean;
};

export const offers: Offer[] = [
	{
		slug: 'saunateich',
		title: 'Saunateich',
		category: 'Vollverbau',
		description: 'Eine kompakte Lösung für Abkühlung und kleine Gartenbereiche.',
		visual: 'water',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'schwimmteich-kompakt',
		title: 'Schwimmteich – kompakte Variante',
		category: 'Vollverbau',
		description: 'Natürliches Badeerlebnis mit umlaufend gestalteter Uferzone.',
		visual: 'leaf',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'schwimmteich-grosszuegig',
		title: 'Schwimmteich – großzügige Variante',
		category: 'Vollverbau',
		description: 'Mehr Raum für längere Schwimmzüge und eine weitläufige Bepflanzung.',
		visual: 'sand',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'schwimmteich-premium',
		title: 'Schwimmteich Premium',
		category: 'Vollverbau',
		description: 'Die großzügigste vorbereitete Variante mit klar gegliederten Zonen.',
		visual: 'water',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'tauchbecken',
		title: 'Tauchbecken',
		category: 'Naturpool',
		description: 'Reduzierte Form für wenig Platz und die Erfrischung nach der Sauna.',
		visual: 'sand',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'naturpool',
		title: 'Naturpool',
		category: 'Naturpool',
		description: 'Geradlinige Gestaltung verbindet sich mit natürlicher Wasseraufbereitung.',
		visual: 'leaf',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'badeteich',
		title: 'Badeteich',
		category: 'Teilverbaute Variante',
		description: 'Eine reduzierte Konstruktion mit naturnah gestaltetem Pflanzbereich.',
		visual: 'water',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'schwimmteich-teilverbaut',
		title: 'Schwimmteich – teilverbaut',
		category: 'Teilverbaute Variante',
		description: 'Für längere Bahnen mit sichtbar bleibender Folie im Schwimmbereich.',
		visual: 'leaf',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'schwimmteich-langformat',
		title: 'Schwimmteich – Langformat',
		category: 'Teilverbaute Variante',
		description: 'Eine weitere vorbereitete Größe für langgestreckte Grundstücke.',
		visual: 'sand',
		priceLabel: 'ab XX.XXX €',
	},
	{
		slug: 'bauen-nach-wunsch',
		title: 'Bauen nach Wunsch',
		category: 'Individuell',
		description: 'Planung entlang der Wünsche und der baulichen Bedingungen vor Ort.',
		visual: 'water',
		priceLabel: 'Preis auf Anfrage',
		customPrice: true,
	},
];
