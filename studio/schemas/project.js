import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web App', value: 'Web App'},
          {title: 'AI/ML', value: 'AI/ML'},
          {title: 'Telecom', value: 'Telecom'},
          {title: 'Blockchain', value: 'Blockchain'},
          {title: 'E-Commerce', value: 'E-Commerce'},
          {title: 'Desktop', value: 'Desktop'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Tag Name', type: 'string'},
            {
              name: 'color',
              title: 'Color',
              type: 'string',
              options: {
                list: [
                  {title: 'Blue', value: 'blue-text-gradient'},
                  {title: 'Green', value: 'green-text-gradient'},
                  {title: 'Pink', value: 'pink-text-gradient'},
                  {title: 'Orange', value: 'orange-text-gradient'},
                ],
              },
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics / Highlights',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. "95% test coverage", "30% less DB load"',
    }),
    defineField({
      name: 'source_code_link',
      title: 'Source Code Link',
      type: 'url',
    }),
    defineField({
      name: 'link',
      title: 'Live Site Link',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
