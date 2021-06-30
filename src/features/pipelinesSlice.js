import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit'
const axios = require('axios');

// const serverBaseUrl = "http://123.60.22.227:9999"
const serverBaseUrl = "http://192.168.77.107:9999"

export const fetchProjects = createAsyncThunk('pipeline/fetchProjects', async () => {
    const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/projects')
    return response.data.data
})

export const fetchProjectStatus = createAsyncThunk("projects/fetchProjectStatus", async (pid) => {
    const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/dashboard/' + pid)
    return response.data.data
})

export const fetchProjectSystemInfo = createAsyncThunk("projects/fetchProjectSystemInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/sys/' + pid)
  return response.data.data
})

export const fetchProjectTaskInfo = createAsyncThunk("projects/fetchProjectTaskInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/taskInfo/' + pid)
  return response.data.data
})


export const fetchProjectAlertInfo = createAsyncThunk("projects/fetchProjectAlertInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/warning/' + pid)
  return response.data.data
})

export const fetchProjectBuildInfo = createAsyncThunk("projects/fetchProjectBuildInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/buildInfo/' + pid)
  return response.data.data
})

export const fetchProjectHealthInfo = createAsyncThunk("projects/fetchProjectHealthInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/codeHealth/' + pid)
  return response.data.data
})

export const fetchProjectBurndownInfo = createAsyncThunk("projects/fetchProjectBurndownInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/burnout/' + pid)
  return response.data.data
})

export const fetchProjectCommitInfo = createAsyncThunk("projects/fetchProjectCommitInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/codeCommitInfo/' + pid)
  return response.data.data
})

export const fetchProjectBugInfo = createAsyncThunk("projects/fetchProjectBugInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/defects/' + pid)
  return response.data.data
})

export const fetchProjectBasicInfo = createAsyncThunk("projects/fetchProjectBasicInfo", async (pid) => {
  const response = await axios.get(serverBaseUrl + '/devops-plantform-data/pipeline/baseInfo/' + pid)
  return response.data.data
})


const pipelinesSlice = createSlice({
  name: 'pipelines',
  initialState: {
    status: 'idle',
    error: null,
    projectList: [],
    currentProId: 1,

    curProStatus: {},
    statusForProStatusRequest: 'idle',

    curProSystemInfo: {},
    statusForProSystemInfoRequest: 'idle',

    curProTaskInfo: {},
    statusForProTaskInfoRequest: 'idle',

    curProAlertInfo: {},
    statusForProAlertInfoRequest: 'idle',

    curProBuildInfo: {},
    statusForProBuildInfoRequest: 'idle',

    curProHealthInfo: {},
    statusForProHealthInfoRequest: 'idle',

    curProBurndownInfo: {},
    statusForProBurndownInfoRequest: 'idle',

    curProCommitInfo: {},
    statusForProCommitInfoRequest: 'idle',

    curProBugInfo: {},
    statusForProBugInfoRequest: 'idle',

    curProBasicInfo: {},
    statusForProBasicInfoRequest: 'idle',



  },
  reducers: {
    updateProId: (state, action) => {
      state.currentProId = action.payload
    },
    
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


    [fetchProjectStatus.pending]: (state, action) => {
      state.statusForProStatusRequest = 'loading'
    },
    [fetchProjectStatus.fulfilled]: (state, action) => {
      state.statusForProStatusRequest = 'succeeded'
      state.curProStatus = action.payload
    },
    [fetchProjectStatus.rejected]: (state, action) => {
      state.statusForProStatusRequest = 'failed'
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

    [fetchProjectBuildInfo.pending]: (state, action) => {
      state.statusForProBuildInfoRequest = 'loading'
    },
    [fetchProjectBuildInfo.fulfilled]: (state, action) => {
      state.statusForProBuildInfoRequest = 'succeeded'
      state.curProBuildInfo = action.payload
    },
    [fetchProjectBuildInfo.rejected]: (state, action) => {
      state.statusForProBuildInfoRequest = 'failed'
      state.error = action.payload
    },


    [fetchProjectHealthInfo.pending]: (state, action) => {
      state.statusForProHealthInfoRequest = 'loading'
    },
    [fetchProjectHealthInfo.fulfilled]: (state, action) => {
      state.statusForProHealthInfoRequest = 'succeeded'
      state.curProHealthInfo = action.payload
    },
    [fetchProjectHealthInfo.rejected]: (state, action) => {
      state.statusForProHealthInfoRequest = 'failed'
      state.error = action.payload
    },


    [fetchProjectBurndownInfo.pending]: (state, action) => {
      state.statusForProBurndownInfoRequest = 'loading'
    },
    [fetchProjectBurndownInfo.fulfilled]: (state, action) => {
      state.statusForProBurndownInfoRequest = 'succeeded'
      state.curProBurndownInfo = action.payload
    },
    [fetchProjectBurndownInfo.rejected]: (state, action) => {
      state.statusForProBurndownInfoRequest = 'failed'
      state.error = action.payload
    },




    [fetchProjectCommitInfo.pending]: (state, action) => {
      state.statusForProCommitInfoRequest = 'loading'
    },
    [fetchProjectCommitInfo.fulfilled]: (state, action) => {
      state.statusForProCommitInfoRequest = 'succeeded'
      state.curProCommitInfo = action.payload
    },
    [fetchProjectCommitInfo.rejected]: (state, action) => {
      state.statusForProCommitInfoRequest = 'failed'
      state.error = action.payload
    },

    [fetchProjectBugInfo.pending]: (state, action) => {
      state.statusForProBugInfoRequest = 'loading'
    },
    [fetchProjectBugInfo.fulfilled]: (state, action) => {
      state.statusForProBugInfoRequest = 'succeeded'
      state.curProBugInfo = action.payload
    },
    [fetchProjectBugInfo.rejected]: (state, action) => {
      state.statusForProBugInfoRequest = 'failed'
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


  },
})

export default pipelinesSlice.reducer
export const { updateProId } = pipelinesSlice.actions

export const selectAllProjects = state => state.pipelines.projectList

export const selectProjectStatus = state => state.pipelines.curProStatus
export const selectProjectSystemInfo = state => state.pipelines.curProSystemInfo
export const selectProjectTaskInfo = state => state.pipelines.curProTaskInfo
export const selectProjectAlertInfo = state => state.pipelines.curProAlertInfo
export const selectProjectBuildInfo = state => state.pipelines.curProBuildInfo
export const selectProjectHealthInfo = state => state.pipelines.curProHealthInfo
export const selectProjectBurndownInfo = state => state.pipelines.curProBurndownInfo
export const selectProjectCommitInfo = state => state.pipelines.curProCommitInfo
export const selectProjectBugInfo = state => state.pipelines.curProBugInfo
export const selectProjectBasicInfo = state => state.pipelines.curProBasicInfo

export const selectCurProId = state => state.pipelines.currentProId
