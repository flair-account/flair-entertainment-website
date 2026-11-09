import type { ImageMetadata } from 'astro'
import hettichCover from '@/assets/studies/hettich/cover.webp'
import hettich02 from '@/assets/studies/hettich/02.webp'
import hettich03 from '@/assets/studies/hettich/03.webp'
import hettich04 from '@/assets/studies/hettich/04.webp'
import hettich05 from '@/assets/studies/hettich/05.webp'
import hettich06 from '@/assets/studies/hettich/06.webp'
import hettich07 from '@/assets/studies/hettich/07.webp'
import hettichPoster from '@/assets/video/hettich-poster.webp'
import avatarCover from '@/assets/studies/avatar/cover.webp'
import avatar01 from '@/assets/studies/avatar/01.webp'
import avatar02 from '@/assets/studies/avatar/02.webp'
import avatar03 from '@/assets/studies/avatar/03.webp'
import avatar04 from '@/assets/studies/avatar/04.webp'
import deGruchyCover from '@/assets/studies/de-gruchy/cover.webp'
import deGruchy01 from '@/assets/studies/de-gruchy/01.webp'
import deGruchy02 from '@/assets/studies/de-gruchy/02.webp'
import deGruchy03 from '@/assets/studies/de-gruchy/03.webp'
import deGruchy04 from '@/assets/studies/de-gruchy/04.webp'
import deGruchyPoster from '@/assets/video/de-gruchy-poster.webp'
import winterCover from '@/assets/studies/winter-enchanted/cover.webp'
import winter01 from '@/assets/studies/winter-enchanted/01.webp'
import winter02 from '@/assets/studies/winter-enchanted/02.webp'
import winter03 from '@/assets/studies/winter-enchanted/03.webp'
import winter05 from '@/assets/studies/winter-enchanted/05.webp'
import winter06 from '@/assets/studies/winter-enchanted/06.webp'
import winterPoster from '@/assets/video/winter-enchanted-poster.webp'

export interface StudyVideo {
	/** Path under `public/`. */
	src: string
	poster: ImageMetadata
	width: number
	height: number
	label: string
}

export interface GalleryImage {
	image: ImageMetadata
	alt: string
}

export interface CaseStudy {
	slug: string
	title: string
	subtitle: string
	/** Heading on the study page itself, which can be longer than the card title. */
	headline: string
	description: string
	cover: ImageMetadata
	coverAlt: string
	/** Shown in place of a video on studies that have none. */
	heroImage?: ImageMetadata
	video?: StudyVideo
	body: readonly string[]
	gallery: readonly GalleryImage[]
}

export const CASE_STUDIES: readonly CaseStudy[] = [
	{
		slug: 'hettich',
		title: 'A Luxury London Christmas',
		subtitle: 'Hettich',
		headline: 'Hettich Christmas Gala',
		description:
			'A Luxury London Christmas with the Nutcracker as its muse: an invite-only gala for Hettich with an original, in-house choreographed performance and handmade costumes.',
		cover: hettichCover,
		coverAlt: 'Ballerina in a white tutu beside a Christmas tree in the Hettich store',
		video: {
			src: '/video/hettich.mp4',
			poster: hettichPoster,
			width: 720,
			height: 1280,
			label: 'Highlights from the Hettich Christmas Gala',
		},
		body: [
			'A jewellery and watch brand called for entertainment that has the same eye for detail as they do, so we worked closely with Hettich to build a concept from scratch: a Luxury London Christmas with the Nutcracker as its muse.',
			'The idea was to give an invite-only gala a presence that reached well beyond the guest list. Our performers set the scene across two stores and the high street between them, while the experience inside stayed intimate and personal, from champagne on arrival to portraits sketched live on Hettich-branded paper.',
			'At the heart of the three-hour evening was an original Nutcracker performance, choreographed in-house and designed around the store itself.',
			'The performance returned every hour and moved through the space so that each guest felt part of it, wherever they happened to be standing. Every costume was handmade for the concept, so the whole night felt like one considered world, rather than a collection of acts.',
		],
		gallery: [
			{ image: hettich02, alt: 'Two performers in red tulle gowns posing in the Hettich store' },
			{ image: hettich03, alt: 'Three performers in red Nutcracker jackets with a luggage trolley' },
			{ image: hettich04, alt: 'Performer in a red gown serving champagne' },
			{ image: hettich05, alt: 'A guest portrait sketched live on Hettich-branded paper' },
			{ image: hettich06, alt: 'Two performers in red gowns laughing together' },
			{ image: hettich07, alt: 'Ballerina dancing beneath a chandelier in the store' },
		],
	},
	{
		slug: 'avatar',
		title: 'An Avatar Corporate Event',
		subtitle: 'A Global Bank',
		headline: 'Extraordinary People: Avatar',
		description:
			'An Avatar-inspired evening for a global bank: in-house costumes, hair and makeup, six multi-skilled performers and an immersive after-dinner show.',
		cover: avatarCover,
		coverAlt: 'Performer in blue Avatar-inspired makeup and costume',
		heroImage: avatar01,
		body: [
			'Some concepts live or die on how believable the characters are, so for this Avatar-inspired evening for a global bank, we started with the people who would bring it to life.',
			'Every costume was designed and made in-house, with the hair and makeup developed alongside them, and a lot of quiet work went on behind the scenes to make each character feel authentic rather than dressed up.',
			'We cast six multi-skilled performers, acrobats, aerialists, dancers and actors, who roamed the event as avatars and made the world feel lived in from the moment guests arrived.',
			'The evening opened with a live performance paired with a digital presentation, so the theme and the purpose of the night arrived together. After dinner, dancers and aerialists came together in an immersive, performance-led show that carried the world through to the end of the evening.',
		],
		gallery: [
			{ image: avatar02, alt: 'Avatar performers among jungle foliage under coloured light' },
			{ image: avatar03, alt: 'Dancers and an aerialist in the after-dinner show, in black and white' },
			{ image: avatar04, alt: 'Aerialist above the stage with green lasers and a digital backdrop' },
		],
	},
	{
		slug: 'de-gruchy-wears-prada',
		title: 'De Gruchy Wears Prada',
		subtitle: 'A Brand Activation',
		headline: 'De Gruchy Wears Prada',
		description:
			'A brand activation with De Gruchy for the launch of The Devil Wears Prada: four dancers styled from the store in a choreographed performance through the shop floor.',
		cover: deGruchyCover,
		coverAlt: 'Dancers styled in De Gruchy fashion posing on the store escalator',
		video: {
			src: '/video/de-gruchy-wears-prada.mp4',
			poster: deGruchyPoster,
			width: 720,
			height: 1280,
			label: 'Highlights from De Gruchy Wears Prada',
		},
		body: [
			'To mark the launch of The Devil Wears Prada, we partnered with De Gruchy on a campaign that brought the film’s world onto their shop floor. De Gruchy’s in-house stylists dressed four professional dancers in pieces carefully chosen from the store, creating their own take on the movie’s iconic look.',
			'The dancers then modelled the collection through an immersive, choreographed performance that moved through the entire store. The moment lived on well beyond the day itself, with a social campaign running for the next couple of weeks around the film’s launch.',
			'A perfect representation of what happens when brand activation, marketing and live entertainment are designed as one idea.',
		],
		gallery: [
			{ image: deGruchy01, alt: 'Shoppers passing the De Gruchy window as the dancers perform inside' },
			{ image: deGruchy02, alt: 'A stylist dressing a dancer, in black and white' },
			{ image: deGruchy03, alt: 'Dancers posing on the De Gruchy staircase' },
			{ image: deGruchy04, alt: 'The four dancers in their styled looks on the store stairs' },
		],
	},
	{
		slug: 'winter-enchanted',
		title: 'Winter Enchanted',
		subtitle: 'Jersey’s Most Magical Christmas Show',
		headline: 'A Winter Enchanted',
		description:
			'Winter Enchanted, Flair’s flagship theatre production at the Jersey Opera House: four sold-out performances, a cast of ten and over 2,500 guests.',
		cover: winterCover,
		coverAlt: 'Dancers in red jackets around a vocalist in a ball gown on stage',
		video: {
			src: '/video/winter-enchanted.mp4',
			poster: winterPoster,
			width: 1280,
			height: 720,
			label: 'Highlights from Winter Enchanted at the Jersey Opera House',
		},
		body: [
			'Winter Enchanted is Flair Entertainment’s flagship theatre production, co-written and co-produced with Georgie Mottram and staged at the Jersey Opera House across four sold-out performances in December 2025. Over two and a half thousand people came to see it, making it one of the island’s biggest festive shows of the year.',
			'The cast of ten brought together West End vocalists, professional dancers, aerialists and the very best of Jersey’s local talent, performing a soundtrack of festive favourites and much-loved songs from The Greatest Showman, Frozen, The Snowman, The Little Mermaid and Mary Poppins.',
			'We built the show from the ground up, from casting and choreography to costume design, staging and marketing, working alongside a full production team of directors, vocal coaches and stage managers over two months of rehearsals. The result was a full-scale West End-style production, made right here in Jersey.',
			'Winter Enchanted returns for another year of sold-out shows this December 2026.',
		],
		gallery: [
			{ image: winter01, alt: 'Dancers in red jackets around a vocalist in a ball gown' },
			{ image: winter02, alt: 'Aerialist on straps above a singer on stage' },
			{ image: winter03, alt: 'Three vocalists in gowns under stage lights' },
			{ image: winter05, alt: 'Aerialist in the splits above a vocalist at the Jersey Opera House' },
			{ image: winter06, alt: 'Two dancers leaping across the stage' },
		],
	},
]

/** The study after `slug`, wrapping to the first, for the "next case study" link. */
export const getNextStudy = (slug: string): CaseStudy => {
	const index = CASE_STUDIES.findIndex((study) => study.slug === slug)
	return CASE_STUDIES[(index + 1) % CASE_STUDIES.length]
}
