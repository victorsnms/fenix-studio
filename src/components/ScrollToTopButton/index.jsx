import { useContext, useEffect, useState } from "react";
import { CommonContext } from "../../providers/CommonContext";
import { IconArrowUp } from "../../icons";
import { smoothScrollToTop } from "../../utils/smoothScrollToTop";
import {
  ScrollTopWrapper,
  ScrollTopButton,
} from "./ScrollToTopButtonElements";

/** Only reveal the button once the visitor is a full viewport height down. */
const REVEAL_AFTER_VIEWPORTS = 1;

const ScrollToTopButton = () => {
  const { t } = useContext(CommonContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsVisible(window.scrollY >= window.innerHeight * REVEAL_AFTER_VIEWPORTS);
    };

    update(); // handle a reload that restores a scrolled position
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <ScrollTopWrapper threshold={0}>
      <ScrollTopButton
        type="button"
        onClick={() => smoothScrollToTop()}
        aria-label={t("menu.accessibility.scrollToTop")}
      >
        <IconArrowUp />
      </ScrollTopButton>
    </ScrollTopWrapper>
  );
};

export default ScrollToTopButton;
