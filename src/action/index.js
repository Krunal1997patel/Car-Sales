export const ADD_ITEM = 'ADD_ITEM'

export const addIteam = (item) => {
    // console.log('add Iteam was clicked', item)
    return{
        type: ADD_ITEM,
        payload: item
    }
}

export const REMOVE_ITEM = 'REMOVE_ITEM'

export const removeIteam = (item) => {
    console.log('remove iteam was clicked', item)
    return{
        type: REMOVE_ITEM,
        payload: item
    }
}