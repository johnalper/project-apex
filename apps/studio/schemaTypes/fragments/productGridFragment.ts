import { defineType, defineField } from 'sanity';

export const productGridFragmentType = defineType({
    name: 'productGridFragment',
    title: 'Shoppable Product Grid Fragment',
    type: 'object',
    fields: [
        defineField({
            name: 'heading',
            type: 'string',
        }),
        defineField({
            name: 'shopifyProductIds',
            title: 'Target Shopify Product IDs',
            type: 'array',
            of[{
                type: 'string',
                description: 'The raw GID string from Shopify',
            }],
        }),
    ],
    validation: (Rule) => Rule.required().min(1),
});
