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