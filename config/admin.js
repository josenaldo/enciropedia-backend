module.exports = ({ env }) => ({
    auth: {
        secret: env("ADMIN_JWT_SECRET", "7a952a58e845d75b6674e759595eb3be"),
    },
    watchIgnoreFiles: ["**/config/sync/**"],
});
