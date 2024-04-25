module.exports = ({ env }) => ({
    presets: [
        [
            '@babel/preset-env',
            {
                modules: env() === 'module' ? false : 'auto',
                targets: '> 0.25%, not dead',
            },
        ],
        '@babel/preset-flow',
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
                useBuiltIns: true,
                useSpread: true,
            },
        ],
    ],
});
