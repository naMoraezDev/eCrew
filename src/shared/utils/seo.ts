export function getCategoryTitle(categorySlug: string) {
  switch (categorySlug) {
    case "cod-mw":
      return "Notícias | Call of Duty: Modern Warfare";
    case "cs-go":
      return "Notícias | Counter-Strike";
    case "dota-2":
      return "Notícias | Dota 2";
    case "league-of-legends":
      return "Notícias | League of Legends";
    case "r6-siege":
      return "Notícias | Rainbow Six Siege";
    case "valorant":
      return "Notícias | Valorant";
    default:
      return "Notícias";
  }
}

export function getCategoryDescription(categorySlug: string) {
  switch (categorySlug) {
    case "cod-mw":
      return "Notícias sobre Call of Duty: Modern Warfare";
    case "cs-go":
      return "Notícias sobre Counter-Strike";
    case "dota-2":
      return "Notícias sobre Dota 2";
    case "league-of-legends":
      return "Notícias sobre League of Legends";
    case "r6-siege":
      return "Notícias sobre Rainbow Six Siege";
    case "valorant":
      return "Notícias sobre Valorant";
    default:
      return "Notícias";
  }
}
