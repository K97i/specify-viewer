import { profileData } from "./profile-store";

function getData(){
    let jsonData: any
    profileData.subscribe((data)=>{
        jsonData = data
    })

    return jsonData
}

export const jsonData = getData()