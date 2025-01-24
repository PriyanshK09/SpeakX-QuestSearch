const path = require("path");
const protoLoader = require("@grpc/proto-loader");
const grpc = require("@grpc/grpc-js");
const { MongoClient, ObjectId } = require("mongodb");

const PROTO_PATH = path.join(__dirname, "protos", "question.proto");
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const questionProto = grpc.loadPackageDefinition(packageDefinition).question;

async function main() {
  // 1. Connect to MongoDB
  const uri = "mongodb+srv://priyanshkhare0908:pkdk1234@speakx.wdojx.mongodb.net/?retryWrites=true&w=majority&appName=speakx"; // change as needed
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db("testdb"); // your DB name
  const collection = db.collection("questions"); // your collection name

  // 2. Implement gRPC method
  async function getQuestions(call, callback) {
    try {
      const { searchQuery } = call.request;
      const query = {};

      if (searchQuery && searchQuery.trim().length > 0) {
        // Example basic text matching on 'title'
        query.title = { $regex: searchQuery, $options: "i" };
      }

      const docs = await collection.find(query).toArray();
      const questions = docs.map((doc) => ({
        id: doc._id.toString(),
        type: doc.type,
        anagramType: doc.anagramType || "",
        blocks:
          doc.blocks?.map((b) => ({
            text: b.text,
            showInOption: b.showInOption,
            isAnswer: b.isAnswer,
          })) || [],
        options:
          doc.options?.map((o) => ({
            text: o.text,
            isCorrectAnswer: o.isCorrectAnswer,
          })) || [],
        siblingId: doc.siblingId ? doc.siblingId.toString() : "",
        solution: doc.solution || "",
        title: doc.title || "",
      }));

      callback(null, { questions });
    } catch (error) {
      callback(error, null);
    }
  }

  // 3. Define server & service
  const server = new grpc.Server();
  server.addService(questionProto.QuestionService.service, {
    GetQuestions: getQuestions,
  });

  // 4. Start server with additional options
  const host = "0.0.0.0:50051";
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error("Failed to bind:", err);
        return;
      }
      console.log("gRPC server running at", host);
      server.start();
    }
  );
}

main().catch((err) => console.error(err));