import { useEffect, useRef } from "react";
import cytoscape, { type Core } from "cytoscape";

export default function App() {
  // The DIV ref where Cytoscape will render the graph
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cyRef = useRef<Core | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: [
        // list of graph elements to start with
        {
          // node a
          group: "nodes",
          data: { id: "a" },
        },
        {
          // node b
          group: "nodes",
          data: { id: "b" },
        },
        {
          // edge ab
          group: "edges",
          data: { id: "ab", source: "a", target: "b" },
        },
      ],
      style: [
        // the stylesheet for the graph
        {
          selector: "node",
          style: {
            "background-color": "#666",
            label: "data(id)",
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
        name: "grid",
        rows: 1,
      },
    });

    cy.add([
      { group: "nodes", data: { id: "c" } },
      { group: "edges", data: { id: "bc", source: "b", target: "c" } },
    ]);

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
