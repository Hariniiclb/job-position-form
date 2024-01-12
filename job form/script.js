function addPhase() {
    const phaseContainer = document.getElementById('phaseContainer').cloneNode(true);
    phaseContainer.id = ''; // Remove the ID to ensure uniqueness
    phaseContainer.querySelector('.delete-phase').onclick = function() {
        deletePhase(this);
    };
    document.getElementById('phasesContainer').appendChild(phaseContainer);
}
function deletePhase(element) {
    const phaseContainer = element.closest('.phase-container');
    phaseContainer.remove();
}