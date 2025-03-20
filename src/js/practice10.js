'use strict';

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        let message = `Мне ${plan["age"]} и я владею языками:${plan["skills"]["languages"].join(' ').toUpperCase()}`
        return message
    }
};

function showExperience(plan) {
    const { exp } = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    let { programmingLangs } = plan.skills;
    let str = '';
    for (let key in programmingLangs) {
        if (Object.keys(programmingLangs).length === 0) {
            return str;
        }

        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        return str;
    }
}

console.log(showExperience(personalPlanPeter));
showProgrammingLangs(personalPlanPeter);