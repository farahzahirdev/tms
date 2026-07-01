export function scrollToAnchor(anchorId: string) {
  const target = document.getElementById(anchorId);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });

  const hash = `#${anchorId}`;
  if (window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }

  return true;
}
