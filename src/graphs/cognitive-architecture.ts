import type { ElementDefinition } from "cytoscape";

const cognitiveArchitecture: ElementDefinition[] = [
  {
    group: "nodes",
    data: {
      id: "acf-main-conversation",
      label: "Main conversation",
      url: "https://chatgpt.com/g/g-p-68f18f6837dc8191a13e5e97192a8a4d-programer-training/c/69162ef0-6058-8326-8d06-9512643d3d5b",
    },
    position: { x: 500, y: 100 },
  },
  {
    group: "nodes",
    data: {
      id: "acf-variant1",
      label: "Estructura aristotelica",
      url: "https://chatgpt.com/g/g-p-68f18f6837dc8191a13e5e97192a8a4d-programer-training/c/69162ef0-6058-8326-8d06-9512643d3d5b",
    },
    position: { x: 300, y: 300 },
  },
  {
    group: "nodes",
    data: {
      id: "acf-variant15",
      label: "Estructura aristotelica1",
      url: "https://chatgpt.com/g/g-p-68f18f6837dc8191a13e5e97192a8a4d-programer-training/c/69162ef0-6058-8326-8d06-9512643d3d5b",
    },
    position: { x: 700, y: 300 },
  },
  {
    group: "edges",
    data: {
      id: "main-conversation-to-variant1",
      source: "acf-main-conversation",
      target: "acf-variant1",
    },
  },
  {
    group: "edges",
    data: {
      id: "main-conversation-to-variant15",
      source: "acf-main-conversation",
      target: "acf-variant15",
    },
  },
  {
    group: "nodes",
    data: {
      id: "acf-variant2",
      label: "Estructura aristotelica",
      url: "https://chatgpt.com/g/g-p-68f18f6837dc8191a13e5e97192a8a4d-programer-training/c/69162ef0-6058-8326-8d06-9512643d3d5b",
    },
    position: { x: 300, y: 500 },
  },
  {
    group: "edges",
    data: {
      id: "variant1-to-variant2",
      source: "acf-variant1",
      target: "acf-variant2",
    },
  },
];

export default cognitiveArchitecture;
