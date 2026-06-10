import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Site description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ogImage",
      title: "Default OpenGraph image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "email",
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking URL",
      type: "url",
    }),
  ],
});
