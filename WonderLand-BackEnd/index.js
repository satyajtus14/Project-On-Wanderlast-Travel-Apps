const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');
const express = require('express');
dotenv.config();

const uri = process.env.MONGO_URL;

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();

    const db = client.db("wonderlast-DB");
    const destinationCollection = db.collection("destinations");


    // API for all destinations
   app.get('/destinations', async (req, res) => {
      const results = await destinationCollection.find({}).toArray();
      res.json(results);

   });

   // API for details destination
   app.get('/destination/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Looking for ID:', id);

    // ✅ Try both — string first, then ObjectId
    let destination = await destinationCollection.findOne({ _id: id }); // string search

    if (!destination && ObjectId.isValid(id)) {
      destination = await destinationCollection.findOne({ 
        _id: new ObjectId(id)  // ObjectId search as fallback
      });
    }

    console.log('Found:', destination);

    if (!destination) {
      return res.status(404).json({ error: "Destination not found" });
    }

    res.json(destination);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// API for edit destinations
    app.put('/destination/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const updatedData = req.body;

        const result = await destinationCollection.updateOne(
          // { _id: new ObjectId(id) },
          { _id: id },
          { $set: updatedData }
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: "Destination not found" });
        }

        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

  // API for delete destinations
    app.delete('/destination/:id', async (req, res) => {
      try {
        const { id } = req.params;

        const result = await destinationCollection.deleteOne({ _id: id });

        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Destination not found" });
        }

        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

  // API for create destinations
    app.post('/destination', async (req, res) => {
      try {
        const newDestinationData = req.body;
        console.log(newDestinationData);
        const result = await destinationCollection.insertOne(newDestinationData);
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");

  } catch (error) {                                    // ✅ closes try correctly
    console.error(" MongoDB connection failed:", error);
  }
}                                                      // ✅ closes run() correctly

run();                                                 // ✅ run() called outside

app.get('/', (req, res) => {
  res.send('Welcome to WonderLand Travel');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});                                                    