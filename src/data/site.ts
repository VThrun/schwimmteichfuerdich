export type SocialProfile = {
	platform: 'Facebook' | 'Instagram';
	href: string | null;
};

export const socialProfiles: SocialProfile[] = [
	{ platform: 'Facebook', href: null },
	{ platform: 'Instagram', href: null },
];
