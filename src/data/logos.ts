import type { ImageMetadata } from 'astro'
import deGruchy from '@/assets/logos/de-gruchy.webp'
import itv from '@/assets/logos/itv.webp'
import bailiwick from '@/assets/logos/bailiwick-express.webp'
import jep from '@/assets/logos/jersey-evening-post.webp'
import bbc from '@/assets/logos/bbc-jersey.webp'
import pwc from '@/assets/logos/pwc.webp'
import ogier from '@/assets/logos/ogier.webp'
import standardBank from '@/assets/logos/standard-bank.webp'
import hsbc from '@/assets/logos/hsbc.webp'
import merton from '@/assets/logos/merton.webp'
import rbc from '@/assets/logos/rbc.webp'
import hettich from '@/assets/logos/hettich.webp'

export interface ClientLogo {
	name: string
	image: ImageMetadata
}

export const PRESS = ['Bailiwick Express', 'Jersey Evening Post', 'ITV Channel', 'BBC Jersey'] as const

export const CLIENT_LOGOS: readonly ClientLogo[] = [
	{ name: 'Bailiwick Express', image: bailiwick },
	{ name: 'ITV Channel', image: itv },
	{ name: 'De Gruchy', image: deGruchy },
	{ name: 'Jersey Evening Post', image: jep },
	{ name: 'BBC Jersey', image: bbc },
	{ name: 'PwC', image: pwc },
	{ name: 'Ogier', image: ogier },
	{ name: 'Standard Bank', image: standardBank },
	{ name: 'HSBC', image: hsbc },
	{ name: 'Merton Hotel', image: merton },
	{ name: 'RBC', image: rbc },
	{ name: 'Hettich', image: hettich },
]
