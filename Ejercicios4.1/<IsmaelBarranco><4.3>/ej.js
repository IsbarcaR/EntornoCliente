function generateVisitorId() {
    return 'visitor_' + Math.random().toString(36).substr(2, 9);
}

function getVisitCount() {
    return parseInt(localStorage.getItem('visits')) || 0;
}

function getUniqueVisitors() {
    return new Set(JSON.parse(localStorage.getItem('uniqueVisitors') || '[]'));
}

function getTimeElapsed(date) {
    const now = new Date();
    const then = new Date(date);
    const diffInSeconds = Math.floor((now - then) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} segundos`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutos`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} horas`;
    return `${Math.floor(diffInSeconds / 86400)} días`;
}

function incrementVisitCount() {
    let visits = getVisitCount();
    visits += 1;
    localStorage.setItem('visits', visits);
    
    const visitorId = localStorage.getItem('visitorId') || generateVisitorId();
    localStorage.setItem('visitorId', visitorId);
    
    const uniqueVisitors = getUniqueVisitors();
    uniqueVisitors.add(visitorId);
    localStorage.setItem('uniqueVisitors', JSON.stringify([...uniqueVisitors]));
    
    return {
        total: visits,
        unique: uniqueVisitors.size
    };
}

function displayVisitStats() {
    const stats = incrementVisitCount();
    const firstVisit = localStorage.getItem('firstVisit') || new Date().toLocaleString();
    const lastVisit = new Date().toLocaleString();

    if (!localStorage.getItem('firstVisit')) {
        localStorage.setItem('firstVisit', firstVisit);
    }
    localStorage.setItem('lastVisit', lastVisit);

    document.getElementById('totalVisits').textContent = stats.total;
    document.getElementById('uniqueVisits').textContent = stats.unique;
    document.getElementById('firstVisitDate').textContent = firstVisit;
    document.getElementById('lastVisitDate').textContent = lastVisit;
    document.getElementById('timeSinceFirst').textContent = getTimeElapsed(firstVisit);

    setInterval(() => {
        document.getElementById('timeSinceFirst').textContent = getTimeElapsed(firstVisit);
    }, 1000);
}

function resetVisits() {
    if (confirm('¿Estás seguro de que deseas reiniciar todas las estadísticas?')) {
        localStorage.clear();
        location.reload();
    }
}

displayVisitStats();