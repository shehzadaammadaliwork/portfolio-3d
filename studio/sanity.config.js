import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio CMS',

  // These will be filled automatically after you run: npx sanity init
  projectId: import.meta.env.SANITY_STUDIO_PROJECT_ID || '5glhrtwq',
  dataset: import.meta.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
