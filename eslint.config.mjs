// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,

// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // Добавляем конфигурацию для управления неиспользованными переменными
  {
    files: ["**/*.{ts,tsx,js}"], // Применяем это только к TypeScript файлам
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/no-unused-vars": "warn"
    }
  }
];


// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     // Устанавливаем 'no-unused-vars' как предупреждение
//     rules: {
//       "no-unused-vars": "warn"
//     }
//   }
// ];