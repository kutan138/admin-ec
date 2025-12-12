import { generate } from "openapi-typescript-codegen";

async function main() {
  await generate({
    input: "http://localhost:8000/docs-json", // swagger URL
    output: "./src/api/generated", // nơi FE muốn lưu client
    httpClient: "fetch",
    useUnionTypes: true,
  });
}

main();
