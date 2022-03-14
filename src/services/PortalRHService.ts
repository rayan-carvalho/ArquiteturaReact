
import { Api } from '../providers';

const obterTodos = () => Api.get('/v1/todos');

export const TodoService = {
  obterTodos
};