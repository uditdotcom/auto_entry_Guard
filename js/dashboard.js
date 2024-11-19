


async function fetchSlots() {
    const response = await fetch("/api/slots");
    const slots = await response.json();

    const slotsContainer = document.getElementById("slots");
    slotsContainer.innerHTML = "";

    let availableCount = 0;
    let occupiedCount = 0;

    slots.forEach(slot => {
        const slotDiv = document.createElement("div");
        slotDiv.className = `slot ${slot.status}`;
        slotDiv.textContent = `Slot ${slot.id} - ${slot.status}`;
        slotsContainer.appendChild(slotDiv);

        if (slot.status === 'available') {
            availableCount++;
        } else {
            occupiedCount++;
        }
    });

    // Update the dashboard numbers dynamically
    document.getElementById("available-slots-count").textContent = availableCount;
    document.getElementById("occupied-slots-count").textContent = occupiedCount;
}

document.getElementById("entry-button").addEventListener("click", async () => {
    const plateNumber = document.getElementById("plate-number").value;
    await fetch("/api/vehicles/entry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plateNumber })
    });
    alert("Vehicle Entry Recorded!");
    fetchSlots();
});

document.getElementById("exit-button").addEventListener("click", async () => {
    const plateNumber = document.getElementById("plate-number").value;
    await fetch("/api/vehicles/exit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plateNumber })
    });
    alert("Vehicle Exit Recorded!");
    fetchSlots();
});

// View All Entries Button
document.getElementById("view-entries-button").addEventListener("click", () => {
    window.location.href = "/entries.html";  // Assuming you have an entries.html page
});

fetchSlots();
