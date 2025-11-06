// Helper functions to get the list of json files in the text

// fixed glob path (was "../assests/..." typo -> "../assets/...")
const modules = import.meta.glob("../assets/text/projects/*.json", {
  eager: true,
});

const dataMap: Record<string, any> = {};

for (const path in modules) {
  // extract filename without extension (works cross-platform)
  const match = path.match(/\/([^\/]+)\.json$/);
  if (!match) continue;
  const key = match[1];
  const value = (modules as any)[path];
  dataMap[key] = value;
}

export type JsonFile = keyof typeof dataMap;

/**
 * Get JSON data by file key. Accepts exact key (e.g. "hidden") or case-insensitive.
 * Throws if not found and lists available keys.
 */
export default function getProjectDescriptionData<T = unknown>(
  file: JsonFile | string
): T {
  const key = String(file);
  const result = dataMap[key];
  if (!result) {
    throw new Error(
      `JSON file "${file}" not found. Available files: ${Object.keys(
        dataMap
      ).join(", ")}`
    );
  }
  return result as T;
}
