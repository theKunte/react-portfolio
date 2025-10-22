// helper to scroll to an element id. If locomotive-scroll is active on #main-scroll,
// prefer using its instance; otherwise fallback to native scrollIntoView.
export default function scrollToId(id) {
  if (!id) return;
  try {
    // locomotive-scroll stores its instance and attaches to window.LocomotiveScroll if used
    const container = document.querySelector('#main-scroll');
    const el = document.getElementById(id.replace(/^#/, ''));
    if (!el) return;

    // If locomotive scroll instance is present on the container, use its scrollTo
    const loco = container && container.__locoInstance;
    if (loco && typeof loco.scrollTo === 'function') {
      loco.scrollTo(el, { offset: 0, duration: 800, easing: [0.25, 0.0, 0.35, 1.0] });
      return;
    }

    // Some integrations attach Locomotive to window as a default export — try that too
    const globalLoco = window && window.locomotiveInstance;
    if (globalLoco && typeof globalLoco.scrollTo === 'function') {
      globalLoco.scrollTo(el);
      return;
    }

    // Fallback native
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (err) {
    // final fallback: native
    const el = document.getElementById(id.replace(/^#/, ''));
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
