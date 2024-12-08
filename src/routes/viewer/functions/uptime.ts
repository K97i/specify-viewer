import { jsonData } from "../../shared/profile-export";

function uptimeCalc() {

    let rawUptime = jsonData["BasicInfo"]["Uptime"]
    
    var days = Math.floor(rawUptime / 86400);
    var hours = Math.floor(rawUptime / 3600);
    var minutes = Math.floor(rawUptime % 3600 / 60);
    var seconds = Math.floor(rawUptime % 3600 % 60);

    let text = ""
    let uptimeColor = "text-neutral-50"

    if (days > 0){
        text += days + " day"
        uptimeColor = "text-warning-600"
        
        if (days > 1){
            text += "s"
        }

        if (seconds > 0 || minutes > 0 || hours > 0){
            text += ", "
        }
    }

    if (hours > 0){
        if (seconds <= 0 && minutes <= 0 && text != ""){
            text += "and "
        }

        text += hours + " hour"
        if (hours > 1){
            text += "s"
        }

        if (seconds > 0 || minutes > 0){
            text += ", "
        }
    }

    if (minutes > 0){
        if (seconds <= 0 && text != ""){
            text += "and "
        }

        text += minutes + " minute"

        if (minutes > 1){
            text += "s"
        }

        if (seconds > 0){
            text += ", "
        }
    }

    if (seconds > 0){
        if (text != ""){
            text += " and "
        }

        text += seconds + " second"
        if (seconds > 1){
            text += "s"
        }
    }

    return [text, uptimeColor]
}

export const profileUptime = uptimeCalc()
