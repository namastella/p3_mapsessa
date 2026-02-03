import { useEffect, useRef, useState } from "react";
import "./TileRow.css";

export function TileRow({ children, ariaLabel = "Kachel-Reihe" }) {
  const scrollerRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      // kleine Toleranz, weil Pixel-Rundungen gern nerven
      const epsilon = 2;

      setAtStart(scrollLeft <= epsilon);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - epsilon);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={[
        "tile-row-wrap",
        atStart ? "is-at-start" : "",
        atEnd ? "is-at-end" : "",
      ].join(" ")}
    >
      <div className="tile-row" ref={scrollerRef} role="list" aria-label={ariaLabel}>
        {children}
      </div>
    </div>
  );
}
