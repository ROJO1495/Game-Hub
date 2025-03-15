function showSection(sectionId, isSeparate = false) {
            document.querySelectorAll('.section, #inicio').forEach(section => {
                section.style.display = 'none';
                document.getElementById("all-xbox-info").style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
            if (isSeparate) {
                window.scrollTo(0, 0);
            }
        }

//Consolas de xbox
function displayXboxSeriesX() {
    document.getElementById("all-xbox-info").style.display = 'block';
    document.getElementById("info-xboxx").style.display = 'block';
    document.querySelectorAll('#xbox, #info-xboxs, #info-xboxonex, #info-xboxones, #info-xboxone').forEach(section => {section.style.display = 'none'});
}

function displayXboxSeriesS() {
    document.getElementById("all-xbox-info").style.display = 'block';
    document.getElementById("info-xboxs").style.display = 'block';
    document.querySelectorAll('#xbox, #info-xboxx, #info-xboxonex, #info-xboxones, #info-xboxone').forEach(section => {section.style.display = 'none'});
}

function displayXboxOneX() {
    document.getElementById("all-xbox-info").style.display = 'block';
    document.getElementById("info-xboxonex").style.display = 'block';
    document.querySelectorAll('#xbox, #info-xboxx, #info-xboxs, #info-xboxones, #info-xboxone').forEach(section => {section.style.display = 'none'});
}

function displayXboxOneS() {
    document.getElementById("all-xbox-info").style.display = 'block';
    document.getElementById("info-xboxones").style.display = 'block';
    document.querySelectorAll('#xbox, #info-xboxx, #info-xboxs, #info-xboxonex, #info-xboxone').forEach(section => {section.style.display = 'none'});
}

function displayXboxOne() {
    document.getElementById("all-xbox-info").style.display = 'block';
    document.getElementById("info-xboxone").style.display = 'block';
    document.querySelectorAll('#xbox, #info-xboxx, #info-xboxs, #info-xboxonex, #info-xboxones').forEach(section => {section.style.display = 'none'});
}

//Consolas Retro
function displayInfo() {
    document.getElementById("info-xboxx").style.display = 'block';
    document.getElementById("xbox").style.display = 'none';
}

function displayInfo1() {
    document.getElementById("info-nes").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInf() {
    document.getElementById("info-sms").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo2(){
    document.getElementById("info-snes").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo3(){
    document.getElementById("info-genesis").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo4(){
    document.getElementById("info-neogeo").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo5(){
    document.getElementById("info-ps1").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo6(){
    document.getElementById("info-n64").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo7(){
    document.getElementById("info-saturn").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo8(){
    document.getElementById("info-dreamcast").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo9(){
    document.getElementById("info-ps2slim").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo10(){
    document.getElementById("info-gamecube").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo11(){
    document.getElementById("info-wii").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo12(){
    document.getElementById("info-xbox ori").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo13(){
    document.getElementById("info-gba").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}

function displayInfo14(){
    document.getElementById("info-psp").style.display = 'block';
    document.getElementById("retro").style.display = 'none';
}
