
type Layer = Float64Array;

function randomLayerSystem(num_layers : number) : Float64Array[] {
    let layer_system = [];
    for (let i = 0; i < num_layers; i++) {
        layer_system.push(randomLayer());
    }
    return layer_system;

}

function randomLayer() : Float64Array {
    let layer = new Float64Array(global_rows*global_cols); 
    for (let i = 0 ; i < layer.length ; i++) {
        layer[i] = 1.0 - 2.0*Math.random();
    } 
    return layer;
}

function blankLayer() : Float64Array {
    let layer = new Float64Array(global_rows*global_cols); 
    return layer;
}
