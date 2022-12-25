const arrayCalc = (arr) => {
    let out = 0
    if (arr[0] != '') out = arr.length;
    return out;
};

function formattedPrep() {
    let kpiRaw = (document.getElementById('job-resp').value).split("\n");
    let kpiCount, qualCount, niceCount = 0;
    kpiCount = arrayCalc(kpiRaw);
    let result = `KPIs 1 pt\n|KPI|Score(${kpiCount})|\n|---|---|\n`
    kpiRaw.forEach(item => {
        result = result + `|${item}||\n`;
    })
    let qualRaw = (document.getElementById('job-req').value).split("\n");
    qualCount = arrayCalc(qualRaw);
    result = result + `Qualifications 2 pt\n|Qualification|Score(${qualCount*2})|\n|---|---|\n`
    qualRaw.forEach(item => {
        result = result + `|${item}||\n`;
    })
    let niceRaw = (document.getElementById('job-nice').value).split("\n");
    niceCount = arrayCalc(niceRaw);
    result = result + `Nice to Haves .5 pt\n|Qualification|Score(${niceCount/2})|\n|---|---|\n`
    niceRaw.forEach(item => {
        result = result + `|${item}||\n`;
    })
    result = result + `|Score| 0/${kpiCount+(qualCount*2)+(niceCount/2)} (0%)|\n`
    let jobResult = (document.getElementById('job-results'));
    jobResult.textContent = result;
}

const submit = document.getElementById('job-submit');
submit.addEventListener("click", formattedPrep);
