import type { SchemaObject } from "@/lib/schema";

type SchemaScriptProps = {
  schema: SchemaObject | SchemaObject[];
};

export function SchemaScript({ schema }: SchemaScriptProps) {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const jsonLd =
    schemas.length === 1
      ? schemas[0]
      : {
          "@context": "https://schema.org",
          "@graph": schemas.map(({ "@context": _ctx, ...rest }) => {
            void _ctx;
            return rest;
          }),
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
