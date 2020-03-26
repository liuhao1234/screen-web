export const sort_modules = "sort_modules";
export const set_screen_data = "get_screen_data"
export const change_item = "change_item"
export const change_item_arr = "change_item_arr"
export const change_screen = "change_screen"
export const add_module = "add_module"
export const delete_module = "delete_module"
export function setScreenData(data){
    return {
        type:set_screen_data,
        data
    }
}
export function sortModules(data){
    return {
        type:sort_modules,
        data
    }
}
export function changeItem(data){
    return {
        type:change_item,
        data
    }
}
export function changeItemArr(data){
    return {
        type:change_item_arr,
        data
    }
}
export function changeScreen(data){
    return {
        type:change_screen,
        data
    }
}

export function addModule(data){
    return {
        type:add_module,
        data
    }
}

export function deleteModule(data){
    return {
        type:delete_module,
        data
    }
}