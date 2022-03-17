module.exports = ({ env }) => ({
    url: env("ENCIROPEDIA_BACKEND_URL"),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
});
