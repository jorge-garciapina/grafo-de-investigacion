import { useEffect, useRef } from "react";
import cytoscape, { type Core } from "cytoscape";
import cognitiveArchitecture from "./graphs/cognitive-architecture";

export default function App() {
  // The DIV ref where Cytoscape will render the graph
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cyRef = useRef<Core | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: cognitiveArchitecture,
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(label)",
          },
        },

        {
          selector: "edge",
          style: {
            width: 3,
            "line-color": "#ccc",
            "target-arrow-color": "#ccc",
            "target-arrow-shape": "triangle",
            "curve-style": "bezier",
          },
        },
      ],

      layout: {
        name: "preset",
      },
    });

    cy.on("tap", "node", function (evt) {
      const node = evt.target;
      console.log("tapped " + node.id());
    });

    cyRef.current = cy;

    // Cleanup to prevent memory leaks when the component unmounts
    return () => {
      cy.destroy();
      cyRef.current = null;
    };
  }, []);

  // Fixed height so the canvas is visible; no styling beyond this
  return <div ref={containerRef} style={{ width: "100%", height: 700 }} />;
}
