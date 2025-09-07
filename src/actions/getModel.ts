import ollama from "ollama";
export default async function getModels() {
  "use server";
  const models = await ollama.list();

  return models;
}
