const initState = {
    isLoading:false
}

export const loadingReducer = (state = initState, action: LoadingActionType): typeof initState => { // fix any
    switch (action.type) {
        case 'CHANGE_LOAD': {
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        default: return state
    }
}
type LoadingActionType = {type: 'CHANGE_LOAD',isLoading:boolean}
export const loadingAC = (isLoading:boolean): LoadingActionType => ({type:'CHANGE_LOAD',isLoading}) // fix any