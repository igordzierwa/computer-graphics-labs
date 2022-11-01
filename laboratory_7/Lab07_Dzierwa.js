var gl;
var points;
window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" );
 }
 
var vertices = new Float32Array([
    -0.5,-0.5, 
    -0.25,0.75, 
    0.0,-0.5, 
    0.0,-0.5, 
    0.25,0.75, 
    0.5,-0.5,
    0.5, -0.5,
    0.75, 0.75,
    1.0, -0.5,
    ]);
 //  Configure WebGL
gl.viewport( 0, 0, canvas.width, canvas.height );
gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
gl.clear(gl.COLOR_BUFFER_BIT);
//  load shaders 
   var program = initShaders( gl, "vertex-shader", "fragment-shader" );
   	gl.useProgram( program );
 
   // Initiate buffer and load data to GPU
   var bufferId = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
   gl.bufferData( gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW );
// Associate shader variables with buffer data and draw  
 var vP = gl.getAttribLocation( program, "vPosition" );
 gl.vertexAttribPointer( vP, 2, gl.FLOAT, false, 0, 0 );
 gl.enableVertexAttribArray( vP ); 
 render();
};

let ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width, canvas.height);

function render() 
{
    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLES, 0, 9 );
}
