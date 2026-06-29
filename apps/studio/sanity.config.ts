import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'commerce-poc',

  projectId: 'd4etx38o',
  dataset: 'poc',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
