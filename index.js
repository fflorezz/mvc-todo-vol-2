import Controller from "./controller.js";
import { $on } from "./helpers.js";
import Template from "./template.js";
import Model from "./model.js";
import View from "./view.js";

const app = new Controller(
  new Model("todos-vanilla-js"),
  new View(new Template())
);
