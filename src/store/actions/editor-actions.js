// 大屏编辑区头部actions
export const save_screen_id = "save_screen_id";

export function saveScreenId(data){
    return {
        type:save_screen_id,
        data
    }
}