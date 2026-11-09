import type { ImageMetadata } from 'astro'
import sharp from 'sharp'
import { rgbaToThumbHash, thumbHashToRGBA } from 'thumbhash'

/** ThumbHash encodes images of at most 100px on either side. */
const THUMBHASH_MAX_SIDE = 100

/** Astro attaches the source path to imported images without exposing it in the type. */
type ImageWithPath = ImageMetadata & { fsPath?: string }

const cache = new Map<string, Promise<string | undefined>>()

const encode = async (fsPath: string): Promise<string> => {
	const { data, info } = await sharp(fsPath)
		.resize(THUMBHASH_MAX_SIDE, THUMBHASH_MAX_SIDE, { fit: 'inside' })
		.ensureAlpha()
		.raw()
		.toBuffer({ resolveWithObject: true })

	const decoded = thumbHashToRGBA(rgbaToThumbHash(info.width, info.height, data))
	// ThumbHash's own encoder writes uncompressed PNGs of several KB; as WebP the same image is a few hundred bytes.
	const webp = await sharp(Buffer.from(decoded.rgba), { raw: { width: decoded.w, height: decoded.h, channels: 4 } })
		.webp({ quality: 70 })
		.toBuffer()

	return `data:image/webp;base64,${webp.toString('base64')}`
}

/**
 * Returns a blurred, few-hundred-byte WebP of an imported image as a data URL, rendered at build
 * time so a media frame shows the image's colours on first paint instead of an empty box.
 * Resolves to `undefined` when the source file cannot be located, and the frame keeps its plain
 * background.
 */
export const getThumbHashDataUrl = (image: ImageMetadata): Promise<string | undefined> => {
	const fsPath = (image as ImageWithPath).fsPath
	if (!fsPath) return Promise.resolve(undefined)

	const cached = cache.get(fsPath)
	if (cached) return cached

	const pending = encode(fsPath).catch(() => undefined)
	cache.set(fsPath, pending)
	return pending
}
