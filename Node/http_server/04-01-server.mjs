import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/JSON");

  response.end(
    JSON.stringify({
      name: "Gianmarco,",
      surname: "Guglielmino",
      career: "jr full stack",
    })
  );
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
