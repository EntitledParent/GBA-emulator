var filterType = 0;

function typeCheck(filterType) {
    if (filterType == 0) {
        document.querySelectorAll('.gba-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.nes-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.snes-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.n64-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.gb-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.atari-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.ds-filter-hide').forEach(el => el.hidden = false);
        document.querySelectorAll('.ps1-filter-hide').forEach(el => el.hidden = false);

    }
    if (filterType == 1) {
        document.querySelectorAll('.gba-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 2) {
        document.querySelectorAll('.nes-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 3) {
        document.querySelectorAll('.snes-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 4) {
        document.querySelectorAll('.n64-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 5) {
        document.querySelectorAll('.gb-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 6) {
        document.querySelectorAll('.atari-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 7) {
        document.querySelectorAll('.ds-filter-hide').forEach(el => el.hidden = true);
    }
    if (filterType == 8) {
        document.querySelectorAll('.ps1-filter-hide').forEach(el => el.hidden = true);
    }
}