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
};
