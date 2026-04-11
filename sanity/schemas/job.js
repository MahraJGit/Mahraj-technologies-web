export default {
  name: 'job',
  title: 'Job Opening',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      initialValue: 'IN-House',
    },
    {
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
        ],
      },
    },
    {
      name: 'postedAt',
      title: 'Posted At',
      type: 'datetime',
      initialValue: (new Date()).toISOString(),
    },
    {
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
