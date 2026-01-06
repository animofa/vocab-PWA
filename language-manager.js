const loaders = {
  en: () => import("./en.js"),
  de: () => import("./de.js"),
  fr: () => import("./fr.js")
};

export async function loadVocabularyForLanguage(lang) {
  if (!loaders[lang]) {
    console.warn(`Unknown language "${lang}", falling back to en`);
    lang = "en";
  }

  const module = await loaders[lang]();
  return module.default;
}
