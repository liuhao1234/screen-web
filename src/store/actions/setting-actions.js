// 大屏编辑区头部actions
export const change_setting = "change_setting";

export function changeSetting(data){
    return {
        type:change_setting,
        data
    }
}