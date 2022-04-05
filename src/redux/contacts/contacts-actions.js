import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const add = createAction('contacts/add', data => {
  const newContact = {
    ...data,
    id: nanoid(),
  };
  return { payload: newContact };
});

const remove = createAction('contacts/remove');

const actions = {
  add,
  remove,
};

export default actions;
