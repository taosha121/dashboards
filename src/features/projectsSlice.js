import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await axios.get('http://localhost:3003/api/projects')
    return response.data
})

export const fetchProjectDetails = createAsyncThunk("projects/fetchProjectDetails", async (pid) => {
    const response = await axios.get('http://localhost:3003/api/projects/' + pid)
    return response.data
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    status: 'idle',
    error: null,
    projectList: [],
    currentProjectId: '',
    currentProjectDetails: {},
    statusForSingleProject: 'idle',
  },
  reducers: {
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
    [fetchProjectDetails.pending]: (state, action) => {
        state.statusForSingleProject = 'loading'
    },
    [fetchProjectDetails.fulfilled]: (state, action) => {
        state.statusForSingleProject = 'succeeded'
        state.currentProjectDetails = action.payload
    },
    [fetchProjectDetails.rejected]: (state, action) => {
        state.statusForSingleProject = 'failed'
        state.error = action.payload
    },

  },
})


export default projectsSlice.reducer

// export const { projectSelect } = projectsSlice.actions

export const selectAllProjects = state => state.projects.projectList

export const selectProject = state => state.projects.currentProjectDetails

    


