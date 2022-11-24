import UseModalDOM from "../helpers/hooks/useModalDOM";
import UseScrollAnchor from "../helpers/hooks/useAnchorScroll";
import useScrollToTop from "../helpers/hooks/useScrollToTop";

export default function Documents({ children }) {
  UseModalDOM();
  useScrollToTop();
  UseScrollAnchor();
  return children;
}
