import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
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
      description: 'e.g. SaaS, Restaurant Tech, DevTool, Mobile App',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Live', value: 'Live'},
          {title: 'Beta', value: 'Beta'},
          {title: 'In Development', value: 'In Development'},
          {title: 'Open Source', value: 'Open Source'},
        ],
        layout: 'radio',
      },
      initialValue: 'Live',
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
      title: 'Product Image / Screenshot',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. POS System, CRM, Table Ordering, ERP Module',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'link',
      title: 'Live Product URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub / Source Code URL',
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
      subtitle: 'status',
      media: 'image',
    },
  },
})
