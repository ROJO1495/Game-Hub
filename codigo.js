function showSection(sectionId, isSeparate = false) {
            document.querySelectorAll('.section, #inicio').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
            if (isSeparate) {
                window.scrollTo(0, 0);
            }
        }

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
