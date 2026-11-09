import type { ImageMetadata } from 'astro'
import megan from '@/assets/team/megan.webp'
import meganCard from '@/assets/team/megan-card.webp'
import lany from '@/assets/team/lany.webp'
import lanyCard from '@/assets/team/lany-card.webp'
import emma from '@/assets/team/emma.webp'
import emmaCard from '@/assets/team/emma-card.webp'
import jessica from '@/assets/team/jessica.webp'
import jessicaCard from '@/assets/team/jessica-card.webp'

export interface TeamMember {
	name: string
	role: string
	/** Longer title used on the About page where there is room for it. */
	fullRole: string
	photo: ImageMetadata
	/** Full-length studio shot for the home page cards, framed with room above for the written name. */
	cardPhoto: ImageMetadata
	bio: string
}

export const TEAM: readonly TeamMember[] = [
	{
		name: 'Megan Webster',
		role: 'Founder & Managing Director',
		fullRole: 'Founder & Managing Director',
		photo: megan,
		cardPhoto: meganCard,
		bio: 'Meet Megan, Founder and Managing Director of Flair. She started the company five years ago and built it from the ground up, and she’ll still happily rebuild an entire show three days out if it makes the night better. She leads the vision here: the big concepts, the stories behind each event, and the client relationships that turn into the shows we’re proudest of. Jersey born, she’s now steering Flair toward multi-month hotel residencies while running the business from wherever in the world she happens to be, with every room she walks into finding its way back into a Flair idea.',
	},
	{
		name: 'Lany De Freitas',
		role: 'Creative Director',
		fullRole: 'Creative Director',
		photo: lany,
		cardPhoto: lanyCard,
		bio: 'Meet Lany, our Creative Director. She came to Flair as a dancer who technically couldn’t work for us yet, she’d just had knee surgery and was desperate to get back on stage. She joined the moment she could, and within months she was running our choreography. No single title has ever really covered her, though: she choreographs, produces the music, sings, performs aerial and fire, and designs and sews the costumes too. She’s usually the first person new performers meet, and the first to laugh when she forgets a count, which is exactly why a room relaxes the second she walks in.',
	},
	{
		name: 'Emma Price',
		role: 'Operations & Artist Liaison',
		fullRole: 'Operations Lead & Artist Liaison',
		photo: emma,
		cardPhoto: emmaCard,
		bio: 'Meet Emma, who runs the operational backbone of Flair. She joined in May 2026 and quietly transformed how the whole business runs, from first enquiry through to performance day. Hand her an operational task, an SOP, a spreadsheet and she’ll come alive where most people would run a mile. She’s worn every hat going since she arrived and she’s also the person every new performer and client gets to know first, the one who makes it all make sense, as our Artist Liaison.',
	},
	{
		name: 'Jessica Jones',
		role: 'Brand & Business Development',
		fullRole: 'Brand & Business Development',
		photo: jessica,
		cardPhoto: jessicaCard,
		bio: 'Meet Jessica, who’s performed with Flair since the very beginning and been in almost everything since. Model, stage manager, choreographer, photoshoot director, financial advisor, it’s quicker to list what she hasn’t done! As of 2026 Jess is now our Business Development Strategist. Jessica brings a unique blend of creativity, commercial awareness and people focused leadership to Flair Entertainment.',
	},
]
