let canvas = document.getElementById("canvas") as HTMLCanvasElement;
let pen = canvas.getContext("2d");
const rowOptions = [10,25,50,100,200];
let currentRowOption = 2;
let global_rows = rowOptions[currentRowOption];
let global_cols = 2*global_rows;
let num_layers = 1;
let layer_system = randomLayerSystem(1);
let filter_span = 9;
let num_filters = 5;
let filter_system = randomFilterSystem(num_filters);








let buffer = blankLayer();
let pixel_height  = canvas.height/global_rows;
let pixel_width   = canvas.width/global_cols;
let hue_field = new Uint8Array(global_rows*global_cols);
let inc = 2.0/255.0;
 
let posterized = true;
let boundary = 127;



const delayOptions = [0,50, 100,150];
let currentDelayOption = 2;
let delay = 100;








