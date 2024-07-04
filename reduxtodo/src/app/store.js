import {configureStore} from '@reduxjs/toolkit';

import todoreducer from '../redux/todo/todoslice'

export const store = configureStore({
  reducer:todoreducer
  })
