/**
 * Adventa CNC Solutions - Machine Data & Rendering
 * This file contains the machine data and dynamically generates the machine cards
 */

// Machines data
const machines = [
    {
        model: "Impera FX 1325",
        tableSize: "1300×2500 mm",
        spindle: "9kW Spindle / 24,000 RPM",
        controller: "Syntec FC60-WA Controller",
        vacuum: "160 m³ Vacuum Pump",
        toolChanger: "Linear 6 / Umbrella 12 Tool Changer"
    },
    {
        model: "Impera FX 1631",
        tableSize: "1600×3100 mm",
        spindle: "9kW Spindle / 24,000 RPM",
        controller: "Syntec FC60-WA Controller",
        vacuum: "200 m³ Vacuum Pump",
        toolChanger: "Linear 8 / Umbrella 12 Tool Changer"
    },
    {
        model: "Impera FX 1642",
        tableSize: "1600×4200 mm",
        spindle: "9kW Spindle / 24,000 RPM",
        controller: "Syntec FC60-WA Controller",
        vacuum: "250 m³ Vacuum Pump",
        toolChanger: "Linear up to 14 / Umbrella 16 Tool Changer"
    },
    {
        model: "Impera FX 2137",
        tableSize: "2100×3700 mm",
        spindle: "9kW Spindle / 24,000 RPM",
        controller: "Syntec FC60-WA Controller",
        vacuum: "250 m³ Vacuum Pump",
        toolChanger: "Linear up to 14 / Umbrella 16 Tool Changer"
    },
    {
        model: "Impera FX 2142",
        tableSize: "2100×4200 mm",
        spindle: "9kW Spindle / 24,000 RPM",
        controller: "Syntec FC60-WA Controller",
        vacuum: "300 m³ Vacuum Pump",
        toolChanger: "Linear up to 14 / Umbrella 16 Tool Changer"
    }
];

/**
 * Creates an HTML string for a machine card
 * @param {Object} machine - Machine data object
 * @returns {string} HTML string for the machine card
 */
function createMachineCard(machine) {
    const slug = machine.model.toLowerCase().replace(/\s+/g, '-');
    const specs = [
        `Table Size: ${machine.tableSize}`,
        machine.spindle,
        machine.controller,
        machine.vacuum,
        machine.toolChanger
    ];

    return `
        <article class="machine-card">
            <img src="images/${slug}.jpg" 
                 alt="The ${machine.model} flatbed CNC router processing components with precision." 
                 class="machine-image"
                 loading="lazy">
            <div class="card-content">
                <h3>${machine.model}</h3>
                <ul class="spec-list">
                    ${specs.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
                <a href="#contact" class="btn btn-secondary">Learn More</a>
            </div>
        </article>
    `;
}

/**
 * Renders all machine cards to the DOM
 */
function renderMachines() {
    const grid = document.getElementById('machinesGrid');
    if (grid) {
        grid.innerHTML = machines.map(createMachineCard).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', renderMachines);
