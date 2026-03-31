import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
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
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'role',
      title: 'Your Role',
      type: 'string',
      description: 'e.g. Full Stack Developer, Backend Engineer',
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of what you did on this project',
    }),
    defineField({
      name: 'challenges',
      title: 'Challenges & Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'challenge',
          fields: [
            {name: 'title', title: 'Challenge Title', type: 'string'},
            {name: 'challenge', title: 'The Problem', type: 'text'},
            {name: 'solution', title: 'The Solution', type: 'text'},
          ],
          preview: {
            select: {title: 'title'},
          },
        },
      ],
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Technologies used e.g. React, Node.js, MongoDB',
    }),
    defineField({
      name: 'patterns',
      title: 'Architectural Patterns',
      type: 'array',
      of: [{type: 'string'}],
      description: 'e.g. MVC, Microservices, REST APIs',
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
