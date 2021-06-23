import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

export const fetchProjects = createAsyncThunk('pipeline/fetchProjects', async () => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/pipeline/projects')
    return response.data.data
})

export const fetchProjectBasicInfo = createAsyncThunk("projects/fetchProjectBasicInfo", async (pid) => {
    const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/pipeline/dashboard/' + pid)
    return response.data.data
})

export const fetchProjectSystemInfo = createAsyncThunk("projects/fetchProjectSystemInfo", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/pipeline/sys/' + pid)
  return response.data.data
})

export const fetchProjectTaskInfo = createAsyncThunk("projects/fetchProjectTaskInfo", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/pipeline/taskInfo/' + pid)
  return response.data.data
})


export const fetchProjectAlertInfo = createAsyncThunk("projects/fetchProjectAlertInfo", async (pid) => {
  const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/pipeline/warning/' + pid)
  return response.data.data
})


// export const fetchProjectProcessDetails = createAsyncThunk("projects/fetchProjectProcessDetails", async (pid) => {
//   const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/process/' + pid)
//   return response.data.data
// })


// export const fetchProjectMonitorDetails = createAsyncThunk("projects/fetchProjectMonitorDetails", async (pid) => {
//   const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/monitor/' + pid)
//   return response.data.data
// })

// export const fetchProjectLocationDetails = createAsyncThunk("projects/fetchProjectLocationDetails", async (pid) => {
//   const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/locations/' + pid)
//   return response.data.data
// })

// export const fetchProjectStatusDetails = createAsyncThunk("projects/fetchProjectStatusDetails", async (pid) => {
//   const response = await axios.get('http://192.168.77.107:9999/devops-plantform-data/project/projectNode/' + pid)
//   return response.data.data
// })

const pipelinesSlice = createSlice({
  name: 'pipelines',
  initialState: {
    status: 'idle',
    error: null,
    projectList: [],

    curProBasicInfo: {},
    statusForProBasicInfoRequest: 'idle',

    curProSystemInfo: {},
    statusForProSystemInfoRequest: 'idle',

    curProTaskInfo: {},
    statusForProTaskInfoRequest: 'idle',

    curProAlertInfo: {},
    statusForProAlertInfoRequest: 'idle',



    // curProAlertDetail: {},
    // statusForProAlertRequest: 'idle',
    // curProProcessDetail: {},
    // statusForProProcessRequest: 'idle',
    // curProMonitorDetail: {},
    // statusForProMonitorRequest: 'idle',
    // curProLocationDetail: {},
    // statusForProLocationRequest: 'idle',
    // curProStatusDetail: {},
    // statusForProStatusRequest: 'idle',
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


    [fetchProjectBasicInfo.pending]: (state, action) => {
      state.statusForProBasicInfoRequest = 'loading'
    },
    [fetchProjectBasicInfo.fulfilled]: (state, action) => {
      state.statusForProBasicInfoRequest = 'succeeded'
      state.curProBasicInfo = action.payload
    },
    [fetchProjectBasicInfo.rejected]: (state, action) => {
      state.statusForProBasicInfoRequest = 'failed'
      state.error = action.payload
    },

    [fetchProjectSystemInfo.pending]: (state, action) => {
      state.statusForProSystemInfoRequest = 'loading'
    },
    [fetchProjectSystemInfo.fulfilled]: (state, action) => {
      state.statusForProSystemInfoRequest = 'succeeded'
      state.curProSystemInfo = action.payload
    },
    [fetchProjectSystemInfo.rejected]: (state, action) => {
      state.statusForProSystemInfoRequest = 'failed'
      state.error = action.payload
    },



    [fetchProjectTaskInfo.pending]: (state, action) => {
      state.statusForProTaskInfoRequest = 'loading'
    },
    [fetchProjectTaskInfo.fulfilled]: (state, action) => {
      state.statusForProTaskInfoRequest = 'succeeded'
      state.curProTaskInfo = action.payload
    },
    [fetchProjectTaskInfo.rejected]: (state, action) => {
      state.statusForProTaskInfoRequest = 'failed'
      state.error = action.payload
    },


    [fetchProjectAlertInfo.pending]: (state, action) => {
      state.statusForProAlertInfoRequest = 'loading'
    },
    [fetchProjectAlertInfo.fulfilled]: (state, action) => {
      state.statusForProAlertInfoRequest = 'succeeded'
      state.curProAlertInfo = action.payload
    },
    [fetchProjectAlertInfo.rejected]: (state, action) => {
      state.statusForProAlertInfoRequest = 'failed'
      state.error = action.payload
    },

    


  },
})


export default pipelinesSlice.reducer

export const selectAllProjects = state => state.pipelines.projectList

export const selectProjectBasicInfo = state => state.pipelines.curProBasicInfo
export const selectProjectSystemInfo = state => state.pipelines.curProSystemInfo
export const selectProjectTaskInfo = state => state.pipelines.curProTaskInfo
export const selectProjectAlertInfo = state => state.pipelines.curProAlertInfo
