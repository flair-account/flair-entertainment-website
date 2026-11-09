/** Business facts shared by the header, footer, structured data and contact links. */
export const SITE = {
	name: 'Flair Entertainment',
	shortName: 'Flair',
	tagline: "Jersey's finest entertainment experiences",
	description:
		"Bespoke entertainment for the island's most discerning corporate, charity and private events. Productions, choreographed pieces and speciality acts from Jersey, Channel Islands.",
	locale: 'en_GB',
	lang: 'en-GB',
	email: 'info@flairentertainment.je',
	performerEmail: 'emma@flairentertainment.je',
	phoneDisplay: '07829 933 337',
	phoneE164: '+447829933337',
	region: 'Jersey, Channel Islands',
	instagramHandle: '@flairentertainment',
	instagramUrl: 'https://www.instagram.com/flairentertainment/',
	facebookUrl: 'https://www.facebook.com/flairentertainmentjersey',
	themeColor: '#1a1a1a',
} as const

export interface NavItem {
	label: string
	href: string
}

export const PRIMARY_NAV: readonly NavItem[] = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Entertainment', href: '/entertainment/' },
]

export const ENQUIRE_HREF = '/enquire/'
export const CAREERS_HREF = '/careers/'

/**
 * Where the static forms post. The site has no backend, so until a form service is chosen the
 * forms hand the submission to the visitor's mail client.
 */
export const FORM_ACTIONS = {
	enquiry: `mailto:${SITE.email}?subject=Booking%20enquiry`,
	performer: `mailto:${SITE.performerEmail}?subject=Performer%20application`,
	newsletter: `mailto:${SITE.email}?subject=Newsletter%20sign-up`,
} as const
