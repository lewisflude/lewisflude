import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export default defineConfig({
  name: "default",
  title: "lewisflude.com",
  projectId: "5zwfw5kp",
  dataset: "production",
  plugins: [deskTool()],

  schema: {
    types: [
      {
        name: "project",
        title: "Project",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
          {
            name: "company",
            title: "Company",
            type: "string",
          },
          {
            name: "date",
            title: "Date",
            type: "datetime",
          },
          {
            name: "jobTitle",
            title: "Job Title",
            type: "string",
          },
          {
            name: "mainImage",
            title: "Main image",
            type: "image",
            options: {
              hotspot: true,
            },
          },
          {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
          },
          {
            name: "description",
            title: "Description",
            type: "string",
          },
        ],
      },
    ],
  },
});
