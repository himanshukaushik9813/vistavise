import { defineField, defineType } from "sanity";

export const podcastEpisode = defineType({
  name: "podcastEpisode",
  title: "Podcast Episode",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "episodeUrl",
      title: "Episode URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publish date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
