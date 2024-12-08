import { jsonData } from "../../shared/profile-export";

async function retrieveEOLData() {
    let url = "https://endoflife.date/api/windows.json"
    return await (await fetch(url)).json();
}

async function makeValidList() {
    let validVersions = "";
    let latestVersions = "";
    let found10 = false;
    let found11 = false

    let eolData = await retrieveEOLData();

    // Determine the latest versions
    for (let i = 0; i < eolData.length; i++) {
        const eolItem = eolData[i];

        // Windows 10
        if (
            eolItem["lts"] == false
            && !eolItem["cycle"].includes("-e")
            && eolItem["cycle"].includes("10")
            && found10 == false
        ){
            latestVersions += eolItem["latest"] + " "
            found10 = true
        }

        // Windows 11
        if (
            eolItem["lts"] == false
            && !eolItem["cycle"].includes("-e")
            && eolItem["cycle"].includes("11")
            && found11 == false
        ){
            latestVersions += eolItem["latest"] + " "
            found11 = true
        }

        if (found10 && found11){
            break
        }
    }

    for (let i = 0; i < eolData.length; i++) {
        const eolItem = eolData[i];

        // Windows 10
        if (
            eolItem["lts"] == false
            && !eolItem["cycle"].includes("-e")
            && Date.parse(eolItem["support"]) > Date.parse(Date())
        ){
            validVersions += eolItem["latest"] + " "
        }
    }

    return [validVersions, latestVersions]

}

async function determineEOLness(){
    let versionArray = await makeValidList()

    let profileVersion = jsonData["BasicInfo"]["Version"]
    let thisBuildInt = Number(profileVersion.substring(5))
    let latestBuildInt = Number(versionArray[1].substring(5))

    let eolText: string
    let upToDate: string

    // EOLness
    if (versionArray[0].includes(profileVersion)){
        eolText = "Not EOL"
    } else if (thisBuildInt > latestBuildInt) {
        eolText = "Insider"
    } else {
        eolText = "EOL"
    }

    // Up-to-date-ness
    if (eolText == "Insider"){
        upToDate = "Insider"
    } else if (versionArray[1].includes(profileVersion)) {
        upToDate = "Up-to-date"
    } else {
        upToDate = "Not Up-to-date"
    }

    return [eolText, upToDate]

}

export const eolness = await determineEOLness()