import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    console.log("start to request" + axios)
    const response = await axios.get('http://localhost:3003/api/projects')
    return response.data
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    status: 'idle',
    error: null,
    projectList: [],
    currentProjectId: 0
  },
  reducers: {
    projectSelect: (state, action) => {
        state.currentProjectId = action.payload.currentProjectId
    }
  },
  extraReducers: {
    [fetchProjects.pending]: (state, action) => {
      state.status = 'loading'
    },
    [fetchProjects.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.projectList = action.payload
    },
    [fetchProjects.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

export const { projectSelect } = projectsSlice.actions

export default projectsSlice.reducer

export const selectAllProjects = state => state.projects.projectList

export const seletePorjectById = (state, projectId) =>
    state.projects.find(project => project.projectId === projectId)


