import js from '@eslint/js';
import html from '@html-eslint/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

const htmlStyleRules = {
    '@html-eslint/indent': 'off',
    '@html-eslint/quotes': 'off',
    '@html-eslint/attrs-newline': 'off',
    '@html-eslint/element-newline': 'off',
    '@html-eslint/no-extra-spacing-tags': 'off',
};

export default [
    {
        ignores: [
            'node_modules/**',
            'photo_baru/**',
            'img/**',
            'Icon/**',
            'name/**',
        ],
    },
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            globals: globals.browser,
        },
    },
    {
        files: ['**/*.html'],
        ...html.configs['flat/recommended'],
        rules: {
            ...html.configs['flat/recommended'].rules,
            ...htmlStyleRules,
        },
    },
    eslintConfigPrettier,
];
