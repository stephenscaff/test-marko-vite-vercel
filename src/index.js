import { Router } from "express";
import indexPage from "./pages/index";
import productTemplate from "./pages/product/template.marko";

export default Router({ mergeParams: true })
  .get("/", indexPage)
  .get("/product/:id", function (req, res) {
    res.marko(productTemplate, req.params);
  });