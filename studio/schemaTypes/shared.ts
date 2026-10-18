import { defineField } from 'sanity';

// Every list item gets the same three controls, at the top of the form.
export const listControls = [
  defineField({ name: 'visible', title: 'Show on the website', type: 'boolean', initialValue: true }),
  defineField({ name: 'featured', title: 'Featured (shown on the home page)', type: 'boolean', initialValue: false }),
  defineField({
    name: 'order', title: 'Display order', type: 'number', initialValue: 10,
    description: 'Lower numbers come first.',
  }),
];

export const photo = (name: string, title: string) =>
  defineField({
    name, title, type: 'image', options: { hotspot: true },
    fields: [
      defineField({
        name: 'alt', title: 'Describe the photo', type: 'string',
        description: 'What is in it, for people who cannot see it. e.g. "Cane chairs on the verandah above the river".',
        validation: (r) => r.required(),
      }),
      defineField({
        name: 'hasPeople', title: 'People can be recognised in this photo', type: 'boolean',
        description: 'Only publish once they have signed a consent form.',
      }),
    ],
  });

export const sites = defineField({
  name: 'sites', title: 'Show on', type: 'array', of: [{ type: 'string' }],
  options: { list: [{ title: 'H2O House', value: 'h2o' }, { title: 'Mystic Village', value: 'mystic' }], layout: 'grid' },
  initialValue: ['h2o'],
});
