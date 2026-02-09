export async function loadVocabularyForLanguage(lang) {
  switch (lang) {
    case "russian":
      return (await import("./languages/russian.js")).default;
    case "romanian":
      return (await import("./languages/romanian.js")).default;
    case "portuguese":
      return (await import("./languages/portuguese.js")).default;
    case "french":
      return (await import("./languages/french.js")).default;
    case "pers":
      return (await import("./languages/pers.js")).default;
    case "english":
    default:
      return (await import("./languages/english.js")).default;
  }
}
