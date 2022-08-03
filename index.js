function saturdayFun(target = 'roller-skate') {
    return (`This Saturday, I want to ${target}!`);
}
saturdayFun();

function mondayWork(target = 'go to the office') {
    return (`This Monday, I will ${target}.`);
}
mondayWork();

function wrapAdjective(otherTarget = '*') {
    return function (target = 'special') {
        return (`You are ${otherTarget}${target}${otherTarget}!`)
        
    }
}

