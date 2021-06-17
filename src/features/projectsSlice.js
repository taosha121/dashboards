import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/projects')
    return response.data.data
})

export const fetchProjectIndustryDetails = createAsyncThunk("projects/fetchProjectIndustryDetails", async (pid) => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/industry/' + pid)
    return response.data.data
})

export const fetchProjectCategoryDetails = createAsyncThunk("projects/fetchProjectCategoryDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/categoryInfo/' + pid)
  return response.data.data
})

export const fetchProjectQualityDetails = createAsyncThunk("projects/fetchProjectQualityDetails", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/qualityInfo/' + pid)
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

    curProIndustryDetail: {},
    statusForProIndustryRequest: 'idle',

    curProCategoryDetail: {},
    statusForProCategoryRequest: 'idle',

    curProQualityDetail: {},
    statusForProQualityRequest: 'idle',



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
    [fetchProjectIndustryDetails.pending]: (state, action) => {
        state.statusForProIndustryRequest = 'loading'
    },
    [fetchProjectIndustryDetails.fulfilled]: (state, action) => {
        state.statusForProIndustryRequest = 'succeeded'
        state.curProIndustryDetail = action.payload
    },
    [fetchProjectIndustryDetails.rejected]: (state, action) => {
        state.statusForProIndustryRequest = 'failed'
        state.error = action.payload
    },

    [fetchProjectCategoryDetails.pending]: (state, action) => {
        state.statusForProCategoryRequest = 'loading'
    },
    [fetchProjectCategoryDetails.fulfilled]: (state, action) => {
        state.statusForProCategoryRequest = 'succeeded'
        state.curProCategoryDetail = action.payload
    },
    [fetchProjectCategoryDetails.rejected]: (state, action) => {
        state.statusForProCategoryRequest = 'failed'
        state.error = action.payload
    },


    [fetchProjectQualityDetails.pending]: (state, action) => {
        state.statusForProQualityRequest = 'loading'
    },
    [fetchProjectQualityDetails.fulfilled]: (state, action) => {
        state.statusForProQualityRequest = 'succeeded'
        state.curProQualityDetail = action.payload
    },
    [fetchProjectQualityDetails.rejected]: (state, action) => {
        state.statusForProQualityRequest = 'failed'
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

export const selectAllProjects = state => state.projects.projectList

export const selectProjectIndustry = state => state.projects.curProIndustryDetail
export const selectProjectCategory = state => state.projects.curProCategoryDetail
export const selectProjectQuality = state => state.projects.curProQualityDetail

export const selectProjectAlert = state => state.projects.curProAlertDetail

export const selectProjectProcess = state => state.projects.curProProcessDetail

export const selectProjectMonitor = state => state.projects.curProMonitorDetail

export const selectProjectLocation = state => state.projects.curProLocationDetail

export const selectProjectStatus = state => state.projects.curProStatusDetail
