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
export const PRIVACY_HREF = '/privacy/'

/** The legal entity behind the brand, as entered in the Jersey Financial Services Commission's companies registry. */
export const COMPANY = {
	legalName: 'Flair Entertainment Limited',
	registrationNumber: '148408',
	jurisdiction: 'Jersey',
	streetAddress: '5 La Ville Vautier, Rue des Cosnets',
	locality: 'St Ouen',
	postalCode: 'JE3 2WF',
	countryCode: 'JE',
} as const

export const COMPANY_ADDRESS = `${COMPANY.streetAddress}, ${COMPANY.locality}, ${COMPANY.jurisdiction} ${COMPANY.postalCode}`

/**
 * Netlify Forms names. Netlify finds the forms in the built HTML at deploy and files submissions
 * under these names, so renaming one starts a new, empty form in the Netlify dashboard.
 */
export const FORM_NAMES = {
	enquiry: 'booking-enquiry',
	performer: 'performer-application',
} as const

/** Name of the honeypot field; each form's `netlify-honeypot` attribute must match it. */
export const HONEYPOT_FIELD = 'bot-field'

/** Netlify sends the visitor here after a successful submission. */
export const FORM_SUCCESS_HREF = '/thanks/'
