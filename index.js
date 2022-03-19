let blockedSites = []

const input = document.querySelector("#input")  
const save_button = document.querySelector("#save-site-btn")
const list = document.querySelector("#ul-list")
const sitesFromLocalStorage = JSON.parse(localStorage.getItem("blockedSites"))
const delete_button = document.querySelector("#delete-sites-btn")
const delete_input = document.querySelector("#delete-site-input")
const delete_specific_site_button = document.querySelector("#delete-specific-site-btn")
const save_tab_button = document.querySelector("#save-tab-btn")

if (sitesFromLocalStorage) {
    blockedSites = sitesFromLocalStorage
    renderSites(blockedSites)
}

function renderSites(sites) {
    let ul_list_item = ""
    for (let i = 0; i < sites.length; i++) {
        ul_list_item += 
        `
            <li>
                <a target="_blank" href="${sites[i]}"> ${sites[i]} </a> 
            </li>
        `
    }
    list.innerHTML = ul_list_item
}

function deleteArrayElement(site) {
    for (let i = 0; i < site.length; i++) {
        if (site[i] == delete_input.value) {
            site.splice(i, 1)
        }
    }  
    localStorage.setItem("blockedSites", JSON.stringify(blockedSites))
    renderSites(blockedSites)
}
/*Syntax adapted from 
https://stackoverflow.com/questions/18436245/how-to-fetch-url-of-current-tab-in-my-chrome-extension-using-javascript*/

save_tab_button.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        blockedSites.push(tabs[0].url)
        localStorage.setItem("blockedSites", JSON.stringify(blockedSites) )
        renderSites(blockedSites)
    })
})

delete_specific_site_button.addEventListener("click", function() {
    deleteArrayElement(blockedSites)
    delete_input.value = ""
    renderSites(blockedSites)
})


save_button.addEventListener("click", function() {
    blockedSites.push(input.value)
    input.value = ""
    localStorage.setItem("blockedSites", JSON.stringify(blockedSites) )
    renderSites(blockedSites)
})

delete_button.addEventListener("dblclick", function() {
    localStorage.clear()
    blockedSites = []
    renderSites(blockedSites)
}) 


