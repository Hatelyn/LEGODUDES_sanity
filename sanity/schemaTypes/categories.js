export const categories = {
        title: "categories",
        name: "categories",
        type: "document",
        fields: [
            {
            title: "Kategoritittel",
            name: "categorytitle",
            type: "string"
            },
            {
                title: "Kategorilink",
                name: "categoryurl",
                type: "slug",
                options: {
                    source: "categorytitle",
                    slugify: input => input.toLowerCase().replace(/\s+/g, "-")
                }

            }
        ]
    }