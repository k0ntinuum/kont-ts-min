function togglePosterized() {
    if (posterized)
        posterized = false;
    else
        posterized = true;
    console.log("toggled posterization mode");
}
function pixel_reset() {
    pixel_height = canvas.height / global_rows;
    pixel_width = canvas.width / global_cols;
}
function resetFilters() {
    filter_system = randomFilterSystem(num_filters);
}
function nextRowOption() {
    currentRowOption++;
    if (currentRowOption > rowOptions.length - 1)
        currentRowOption = 0;
    global_rows = rowOptions[currentRowOption];
    global_cols = 2 * global_rows;
    pixel_reset();
    seedCurrentCells();
}
