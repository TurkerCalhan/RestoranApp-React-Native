import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer inpX2KKAvzRe_XjuQlYc-0uAG3PYDnTdIqkDYXpV_uPhSW7sxLy5OFK5vM_o-Hs5vPUj6bgICkTX5_2dx3rqonFzFIPDhmwj02GBe2QaJV_PkMWVe94Gxu16j6HHZHYx",
  },
});
