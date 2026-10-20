import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

// Fill in after `npx sanity init` (logged in with the H2O / NotOnMap account).
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'm47df98v';

export default defineConfig({
  name: 'h2o',
  title: 'H2O House',
  projectId,
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title('Content').items([
          // single documents, not lists
          S.listItem().title('Home page').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
          S.listItem().title('Site settings').id('settings').child(S.document().schemaType('settings').documentId('settings')),
          S.divider(),
          ...S.documentTypeListItems().filter((i) => !['settings', 'homePage', 'homeSection'].includes(i.getId() ?? '')),
        ]),
    }),
  ],
  schema: { types: schemaTypes },
  // Free plan only: switch off features that show during the trial but are paid afterwards
  tasks: { enabled: false },
  releases: { enabled: false },
  scheduledDrafts: { enabled: false },
  scheduledPublishing: { enabled: false },
  mediaLibrary: { enabled: false },
  document: {
    comments: { enabled: false },
    // there is only ever one Home page and one Site settings
    newDocumentOptions: (prev) => prev.filter((t) => !['homePage', 'settings'].includes(t.templateId)),
    actions: (prev, { schemaType }) =>
      ['homePage', 'settings'].includes(schemaType) ? prev.filter((a) => !['delete', 'duplicate', 'unpublish'].includes(a.action ?? '')) : prev,
  },
});
