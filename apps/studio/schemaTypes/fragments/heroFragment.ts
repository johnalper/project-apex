import { defineType, defineField } from 'sanity';

export const heroFragmentType = defineType({
    name: 'heroFragment',
    title: 'Hero Fragment',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            type: 'string',
            validation: (Rule) => Rule.require(),
        }),
        defineField({
            name: 'subheadline',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'ctaLabel',
            type: 'string',
        }),
        defineField({
            name: 'ctaLink',
            type: 'string',
            description: 'Internal route or external URL structure',
        }),
    ],
});
