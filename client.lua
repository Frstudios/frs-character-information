local QBCore = exports['qb-core']:GetCoreObject()
local isDisplaying = false
local display = false

RegisterNetEvent('QBCore:Client:OnPlayerLoaded')
AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    DisplayCharacter(PlayerData)
end)

RegisterNetEvent('QBCore:Client:OnJobUpdate')
AddEventHandler('QBCore:Client:OnJobUpdate', function(JobInfo)
    local PlayerData = QBCore.Functions.GetPlayerData()
    DisplayCharacter(PlayerData)
end)

RegisterCommand("testcharacter", function()
    local PlayerData = QBCore.Functions.GetPlayerData()
    DisplayCharacter(PlayerData)
end)

function DisplayCharacter(PlayerData)
    display = true
    SendNUIMessage({
        type = "showCharacter",
        name = PlayerData.charinfo.firstname .. " " .. PlayerData.charinfo.lastname,
        job = PlayerData.job.label .. " - " .. PlayerData.job.grade.name,
        playAudio = true
    })
    
    Citizen.SetTimeout(5000, function()
        SendNUIMessage({
            type = "hideCharacter"
        })
        display = false
    end)
end
