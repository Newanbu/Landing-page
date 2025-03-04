import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import { Box } from "@chakra-ui/react";

const initialNodes = [
    { id: "1", position: { x: 500, y: 50 }, data: { label: "Gerente General" } },
    { id: "2", position: { x: 200, y: 200 }, data: { label: "Departamento de Administración y Finanzas" } },
    { id: "3", position: { x: 500, y: 200 }, data: { label: "Departamento HSE" } },
    { id: "4", position: { x: 800, y: 200 }, data: { label: "Departamento Servicios" } },
    { id: "5", position: { x: 200, y: 350 }, data: { label: "Jefe de Administración y Finanzas" } },
    { id: "6", position: { x: 500, y: 350 }, data: { label: "Jefe HSE" } },
    { id: "7", position: { x: 800, y: 350 }, data: { label: "Gerente de Operaciones" } },
    { id: "8", position: { x: 30, y: 500 }, data: { label: "Supervisora" } },
    { id: "9", position: { x: 200, y: 500 }, data: { label: "Analista (2)" } },
    { id: "10", position: { x: 200, y: 650 }, data: { label: "Chofer Adquisición" } },
    { id: "11", position: { x: 380, y: 500 }, data: { label: "Ingeniero en Prevención de Riesgos" } },
    { id: "12", position: { x: 550, y: 500 }, data: { label: "Técnico en Prevención" } },
    { id: "13", position: { x: 500, y: 650 }, data: { label: "Enfermera" } },
    { id: "14", position: { x: 750, y: 500 }, data: { label: "Ingeniero en Gestión (2)" } },
    { id: "15", position: { x: 950, y: 500 }, data: { label: "Contratos" } },
  ];
  
  const initialEdges = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e1-4", source: "1", target: "4" },
    { id: "e2-5", source: "2", target: "5" },
    { id: "e5-8", source: "5", target: "8" },
    { id: "e5-9", source: "5", target: "9" },
    { id: "e9-10", source: "9", target: "10" },
    { id: "e3-6", source: "3", target: "6" },
    { id: "e6-11", source: "6", target: "11" },
    { id: "e6-12", source: "6", target: "12" },
    { id: "e12-13", source: "12", target: "13" },
    { id: "e4-7", source: "4", target: "7" },
    { id: "e7-14", source: "7", target: "14" },
    { id: "e7-15", source: "7", target: "15" },
  ];
const Diagram = () => {
  return (
    <Box w="100%" h="500px" border="1px solid gray" borderRadius="lg">
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
      </ReactFlow>
    </Box>
  );
};

export default Diagram;
