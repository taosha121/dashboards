import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/projectsSlice'
import pipelinesReducer from '../features/pipelinesSlice'

export default configureStore({
  reducer: {
    projects: projectsReducer,
    pipelines: pipelinesReducer,
  }
})
