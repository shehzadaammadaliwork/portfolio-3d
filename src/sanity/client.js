import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const isSanityConfigured = () => Boolean(projectId)

export const client = projectId
  ? createClient({ projectId, dataset, useCdn: true, apiVersion: '2024-01-01' })
  : null

const builder = client ? imageUrlBuilder(client) : null

export const urlFor = (source) => builder?.image(source)
