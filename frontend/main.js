window.addEventListener('DomContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'https://count-test-cv-plus-one.azurewebsites.net';

const getVisitCount = () => {
    let count = 30;
    fetch(funcctionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("count").innerText = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}
