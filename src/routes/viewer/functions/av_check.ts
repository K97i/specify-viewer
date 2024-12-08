import { jsonData } from "../../shared/profile-export";

function avCheck(){
    let text = ""
    let avBool = true

    if (jsonData["Security"]["AvList"] == 0){
        avBool = false

        return avBool
    }

    if (jsonData["Security"]["AvList"].length == 1){
        
        text = jsonData["Security"]["AvList"][0]

        return text
    }

    for (let i = 0; i < jsonData["Security"]["AvList"].length; i++) {
        
        if (i == jsonData["Security"]["AvList"].length - 1) {
            text += ", and ";
        }
        
        else if (i > 0) {
            text += ", ";
        }
        
        text += jsonData["Security"]["AvList"][i]

    }
    
    return text
}

export const avList = avCheck()