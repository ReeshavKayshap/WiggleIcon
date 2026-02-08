// template.ts
export const pageTemplate = (iconName: string, props: any) => `
import { motion } from "framer-motion";
import { ${iconName} } from "./icons";

export default function Page() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <nav style={{ padding: 16, background: "#111", color: "white" }}>
        Icon Playground
      </nav>

      <main style={{ padding: 40 }}>
        <motion.div
          animate={{
            scale: ${props.scale},
            rotate: ${props.rotate}
          }}
          transition={{ duration: ${props.duration} }}
        >
          <${iconName}
            size={${props.size}}
            color="${props.color}"
            strokeWidth={${props.strokeWidth}}
          />
        </motion.div>
      </main>
    </div>
  );
}
`;
