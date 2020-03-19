import { qs, $on, $delegate } from "./helpers.js";

const _itemId = element =>
  parseInt(
    element.parentNode.dataset.id || element.parentNode.parentNode.dataset.id,
    10
  );
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export default class View {
  //  @param { !Template } template A Template instance

  constructor(template) {}
}
