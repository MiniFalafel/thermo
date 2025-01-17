
function IdEl(name)
{   // wrapper (makes typing take less time)
    return document.getElementById(name);
}

function ClEl(name)
{   // ditto
    return document.getElementsByClassName(name);
}

function ToggleMenu()
{   // just toggles the state checkbox
    let state = IdEl("hidHandMenuState");
    if (state.checked) {
        state.checked = ""
        return;
    }
    state.checked = "checked";
}

function ScrollTo(section)
{
    IdEl(section).scrollIntoView();
}
