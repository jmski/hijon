export const social = {
  name: "social",
  title: "Social Links",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
