function getVisitCount() {
    const visits = parseInt(document.cookie.replace(/(?:(?:^|.*;\s*)visits\s*=\s*([^;]*).*$)|^.*$/, "$1")) || 0;
    return visits;
}

function incrementVisitCount() {
    let visits = getVisitCount();
    visits += 1;
    document.cookie = `visits=${visits}; path=/; max-age=${365 * 24 * 60 * 60}`; 
    return visits;
}

function displayVisitStats() {
    const visits = incrementVisitCount();
    document.getElementById("totalVisits").textContent = visits;

    const firstVisit = localStorage.getItem("firstVisit") || new Date().toLocaleString();
    const lastVisit = new Date().toLocaleString();

    localStorage.setItem("firstVisit", firstVisit);
    localStorage.setItem("lastVisit", lastVisit);

    document.getElementById("firstVisitDate").textContent = firstVisit;
    document.getElementById("lastVisitDate").textContent = lastVisit;
}

function resetVisits() {
    document.cookie = "visits=0; path=/";
    localStorage.removeItem("firstVisit");
    localStorage.removeItem("lastVisit");
    displayVisitStats();
}

displayVisitStats();