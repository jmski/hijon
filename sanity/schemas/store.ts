export const store = {
  name: "store",
  title: "Store Links",
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
      name: "product",
      title: "Product",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
