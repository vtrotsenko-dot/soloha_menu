/** @type {import('stylelint').Config} */
export default {
    extends: ['stylelint-config-standard'],
    ignoreFiles: ['node_modules/**', 'photo_baru/**', 'img/**', 'Icon/**', 'name/**'],
    rules: {
        'selector-class-pattern': null,
        'selector-id-pattern': null,
    },
};
