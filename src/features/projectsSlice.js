import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/projects')
    return response.data.data
})

export const fetchProjectCommonDetails = createAsyncThunk("projects/fetchProjectCommonDetails", async (pid) => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/industry/' + pid)
    return response.data.data
})


export const fetchProjectAlertDetails = createAsyncThunk("projects/fetchProjectAlertDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/events/' + pid)
  return response.data.data
})


export const fetchProjectProcessDetails = createAsyncThunk("projects/fetchProjectProcessDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/process/' + pid)
  return response.data.data
})


export const fetchProjectMonitorDetails = createAsyncThunk("projects/fetchProjectMonitorDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/monitor/' + pid)
  return response.data.data
})

export const fetchProjectLocationDetails = createAsyncThunk("projects/fetchProjectLocationDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/locations/' + pid)
  return response.data.data
})

export const fetchProjectStatusDetails = createAsyncThunk("projects/fetchProjectStatusDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/projectNode/' + pid)
  return response.data.data
})

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    status: 'idle',
    error: null,
    projectList: [],
    currentProjectId: '',

    curProCommonDetail: {},
    statusForProCommonRequest: 'idle',
    curProAlertDetail: {},
    statusForProAlertRequest: 'idle',
    curProProcessDetail: {},
    statusForProProcessRequest: 'idle',
    curProMonitorDetail: {},
    statusForProMonitorRequest: 'idle',
    curProLocationDetail: {},
    statusForProLocationRequest: 'idle',
    curProStatusDetail: {},
    statusForProStatusRequest: 'idle',
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

    // detail api1
    [fetchProjectCommonDetails.pending]: (state, action) => {
        state.statusForProCommonRequest = 'loading'
    },
    [fetchProjectCommonDetails.fulfilled]: (state, action) => {
        state.statusForProCommonRequest = 'succeeded'
        state.curProCommonDetail = action.payload
    },
    [fetchProjectCommonDetails.rejected]: (state, action) => {
        state.statusForProCommonRequest = 'failed'
        state.error = action.payload
    },

    // detail api2
    [fetchProjectAlertDetails.pending]: (state, action) => {
      state.statusForProAlertRequest = 'loading'
    },
    [fetchProjectAlertDetails.fulfilled]: (state, action) => {
        state.statusForProAlertRequest = 'succeeded'
        state.curProAlertDetail = action.payload
    },
    [fetchProjectAlertDetails.rejected]: (state, action) => {
        state.statusForProAlertRequest = 'failed'
        state.error = action.payload
    },


    // detail api3
    [fetchProjectProcessDetails.pending]: (state, action) => {
      state.statusForProProcessRequest = 'loading'
    },
    [fetchProjectProcessDetails.fulfilled]: (state, action) => {
        state.statusForProProcessRequest = 'succeeded'
        state.curProProcessDetail = action.payload
    },
    [fetchProjectProcessDetails.rejected]: (state, action) => {
        state.statusForProProcessRequest = 'failed'
        state.error = action.payload
    },


    // detail api4
    [fetchProjectMonitorDetails.pending]: (state, action) => {
      state.statusForProMonitorRequest = 'loading'
    },
    [fetchProjectMonitorDetails.fulfilled]: (state, action) => {
        state.statusForProMonitorRequest = 'succeeded'
        state.curProMonitorDetail = action.payload
    },
    [fetchProjectMonitorDetails.rejected]: (state, action) => {
        state.statusForProMonitorRequest = 'failed'
        state.error = action.payload
    },


    // detail api5
    [fetchProjectLocationDetails.pending]: (state, action) => {
      state.statusForProLocationRequest = 'loading'
    },
    [fetchProjectLocationDetails.fulfilled]: (state, action) => {
        state.statusForProLocationRequest = 'succeeded'
        state.curProLocationDetail = action.payload
    },
    [fetchProjectLocationDetails.rejected]: (state, action) => {
        state.statusForProLocationRequest = 'failed'
        state.error = action.payload
    },


    // detail api6
    [fetchProjectStatusDetails.pending]: (state, action) => {
      state.statusForProStatusRequest = 'loading'
    },
    [fetchProjectStatusDetails.fulfilled]: (state, action) => {
        state.statusForProStatusRequest = 'succeeded'
        state.curProStatusDetail = action.payload
    },
    [fetchProjectStatusDetails.rejected]: (state, action) => {
        state.statusForProStatusRequest = 'failed'
        state.error = action.payload
    },


  },
})


export default projectsSlice.reducer

// export const { projectSelect } = projectsSlice.actions

export const selectAllProjects = state => state.projects.projectList

export const selectProjectCommon = state => state.projects.curProCommonDetail

export const selectProjectAlert = state => state.projects.curProAlertDetail

export const selectProjectProcess = state => state.projects.curProProcessDetail

export const selectProjectMonitor = state => state.projects.curProMonitorDetail

export const selectProjectLocation = state => state.projects.curProLocationDetail

export const selectProjectStatus = state => state.projects.curProStatusDetail
