export function useShareButtons() {
  const link = (typeof window !== "undefined" && window.location.href) || "";
  const defaultMessage =
    "Mantem-se informado sobre seu esporte eletrônico favorito:";
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  const wppShareUrl = `https://api.whatsapp.com/send?text=${defaultMessage}${link}`;
  const ttShareUrl = `https://twitter.com/intent/tweet?url=${link}&text=${defaultMessage}%0a%0a`;

  function nativeShare() {
    navigator.share({
      url: link,
      text: defaultMessage,
    });
  }

  return {
    fbShareUrl,
    ttShareUrl,
    wppShareUrl,
    nativeShare,
  };
}
