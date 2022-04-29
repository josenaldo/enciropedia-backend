// ./config/plugins.js
module.exports = {
    slugify: {
        enabled: true,
        config: {
            contentTypes: {
                artigo: {
                    field: "slug",
                    references: "titulo",
                },
                categoria: {
                    field: "slug",
                    references: "categoria",
                },
                colaborador: {
                    field: "slug",
                    references: "username",
                },
                "evento-biografico": {
                    field: "slug",
                    references: "titulo",
                },
            },
        },
    },
    migrations: {
        enabled: true,
        config: {
            autoStart: true,
            migrationFolderPath: "migrations",
        },
    },
    transformer: {
        enabled: true,
        config: {
            prefix: "/api/",
            responseTransforms: {
                removeAttributesKey: true,
                removeDataKey: true,
            },
        },
    },
    email: {
        config: {
            provider: "sendmail",
            settings: {
                defaultFrom: "enciropedia@gmail.com",
                defaultReplyTo: "enciropedia@gmail.com",
                testAddress: "enciropedia@gmail.com",
            },
        },
    },
    upload: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: process.env.CLOUDINARY_NAME,
                api_key: process.env.CLOUDINARY_KEY,
                api_secret: process.env.CLOUDINARY_SECRET,
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
};
