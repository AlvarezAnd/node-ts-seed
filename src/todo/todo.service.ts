import provider from "../config/ioc/provider";
import TYPES from "../config/ioc/types";

@provider(TYPES.TodoService)
export default class TodoService {
  getAll () {
    return [];
  }
}
