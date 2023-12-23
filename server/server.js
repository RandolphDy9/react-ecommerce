const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51OQE7JAbXRMhAWV62XZHFRoKHpgA9qJWzMSk5MGzRHLAUZ9wbBK1nJ2lRmfJpgWKKVpvZMXIEBcg8OTDCRy4B6bu00U28LzrAE");

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async(req, res) => {
  const items = req.body.items;
  let lineItems = [];
  console.log(items);
  items.forEach(item => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity
    })
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancelled"
  });

  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(4000, () => console.log("listening on port 4000"))
