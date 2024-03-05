const {
  app,
  PORT,
  connectToDatabase,
  router,
  express,
  cors,
} = require("./App");

app.use(cors());

app.use(express.json());

app.use("/todo", router);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
