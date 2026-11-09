/**
 * Writes the favicon set and web manifest icons into `public/` from one monogram drawing.
 * Run with `node scripts/generateFavicons.mjs` after changing the mark.
 */
import { writeFile } from 'node:fs/promises'
import sharp from 'sharp'

const INK = '#1a1a1a'
const CREAM = '#f2ede9'

/** The light Montserrat "F" from the brand thumbnail, drawn as rectangles so it needs no font. */
const buildMonogram = ({ rounded, padding }) => {
	const scale = (100 - padding * 2) / 100
	const offset = padding
	const shape = (x, y, w, h) =>
		`<rect x="${offset + x * scale}" y="${offset + y * scale}" width="${w * scale}" height="${h * scale}"/>`
	return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
<rect width="100" height="100" rx="${rounded ? 18 : 0}" fill="${INK}"/>
<g fill="${CREAM}">${shape(37, 22, 5.5, 56)}${shape(37, 22, 28, 5.5)}${shape(37, 47.5, 24, 5.5)}</g>
</svg>`
}

/** Packs PNG images into an ICO container; every modern browser reads PNG-encoded entries. */
const toIco = (images) => {
	const header = Buffer.alloc(6)
	header.writeUInt16LE(0, 0)
	header.writeUInt16LE(1, 2)
	header.writeUInt16LE(images.length, 4)
	let offset = 6 + images.length * 16
	const entries = images.map(({ size, data }) => {
		const entry = Buffer.alloc(16)
		entry.writeUInt8(size >= 256 ? 0 : size, 0)
		entry.writeUInt8(size >= 256 ? 0 : size, 1)
		entry.writeUInt16LE(1, 4)
		entry.writeUInt16LE(32, 6)
		entry.writeUInt32LE(data.length, 8)
		entry.writeUInt32LE(offset, 12)
		offset += data.length
		return entry
	})
	return Buffer.concat([header, ...entries, ...images.map(({ data }) => data)])
}

const renderPng = (svg, size) => sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9 }).toBuffer()

const favicon = buildMonogram({ rounded: true, padding: 0 })
const square = buildMonogram({ rounded: false, padding: 0 })
const maskable = buildMonogram({ rounded: false, padding: 12 })

await writeFile('public/favicon.svg', favicon)
await writeFile('public/apple-touch-icon.png', await renderPng(square, 180))
await writeFile('public/icon-192.png', await renderPng(square, 192))
await writeFile('public/icon-512.png', await renderPng(square, 512))
await writeFile('public/icon-maskable-512.png', await renderPng(maskable, 512))
const icoSizes = [16, 32, 48]
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await renderPng(favicon, size) })))
await writeFile('public/favicon.ico', toIco(icoImages))
