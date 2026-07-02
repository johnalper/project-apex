import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'commerce-poc',

  projectId: 'd4etx38o',
  dataset: 'poc',

  deployment: {
      // prevents interactive CLI block/stall when upstream version mismatch
      autoUpdates: false,
  },

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
