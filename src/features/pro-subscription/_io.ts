export function useProSubscription() {
  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }

  return { scrollToBottom };
}
