import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToTop } from "../../utils/smoothScrollToTop";

/**
 * Resets scroll position on route change.
 *
 * React Router does client-side navigation, which keeps the current scroll
 * offset — so leaving a page while scrolled down lands you halfway into the
 * next one. Mount this inside <Router> (it renders nothing) to scroll back to
 * the top whenever the path changes.
 *
 * In-page scrolling is left alone: the pathname doesn't change for the
 * scrollIntoView CTAs (About → "our-team", service pages → contact form), and
 * a hash is treated as an explicit request to scroll somewhere else.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    // Returned cancel doubles as the effect cleanup, so a pending scroll is
    // aborted if the route changes again mid-animation.
    return smoothScrollToTop();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
