export const resource = {
  name: "resource",
  title: "Resource Links",
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
      name: "preview",
      title: "Preview",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
