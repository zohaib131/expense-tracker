// 'use client'

export default(state, action)=>{
    switch(action.type){
        case 'Delete_Transaction':
            return {
                ...state,
                transcations: state.transcations.filter(transcation => transcation.id !==action.payload)
            }
        
        case 'add_Transaction':
            return {
                ...state,
                transcations: [action.payload, ...state.transcations]
            }

        default:
            return state;
    }
}