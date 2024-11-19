async function fetchEntries() {
    const response = await fetch("/api/vehicles/entries");
    const entries = await response.json();

    const tableBody = document.getElementById("entries-table-body");
    tableBody.innerHTML = ""; // Clear existing rows

    entries.forEach(entry => {
        const row = document.createElement("tr");

        const vehicleNumber = document.createElement("td");
        vehicleNumber.textContent = entry.plateNumber;

        const entryDate = document.createElement("td");
        entryDate.textContent = entry.entryDate;

        const entryTime = document.createElement("td");
        entryTime.textContent = entry.entryTime;

        row.appendChild(vehicleNumber);
        row.appendChild(entryDate);
        row.appendChild(entryTime);

        tableBody.appendChild(row);
    });
}

window.onload = fetchEntries;
