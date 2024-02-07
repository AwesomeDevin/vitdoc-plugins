import { isDaily } from "./def"

export const DEFAULT_REGISTRY = process.env.REGISTRY || 'https://registry.npmjs.org/'
export const DEFAULT_IS_BETA = process.env.BETA || isDaily || false