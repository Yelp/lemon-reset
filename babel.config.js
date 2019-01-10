module.exports = ({ env }) => ({
    presets: [
        [
            '@babel/preset-env',
            {
                modules: env() === 'module' ? false : 'auto',
            },
        ],
        '@babel/preset-flow',
        '@babel/preset-react',
    ],
});
