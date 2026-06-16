import type { SchemaObject } from "@/lib/schema";

type SchemaScriptProps = {
  schema: SchemaObject | SchemaObject[];
};

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((item, index) => (
        <script
          key={typeof item["@id"] === "string" ? item["@id"] : index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
