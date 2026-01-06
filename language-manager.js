export async function loadVocabularyForLanguage(lang) {
  switch (lang) {
    case "russian":
      return (await import("./russian.js")).default;
    case "romanian":
      return (await import("./romanian.js")).default;
    case "portuguese":
      return (await import("./portuguese.js")).default;
    case "english":
    default:
      return (await import("./english.js")).default;
  }
}
