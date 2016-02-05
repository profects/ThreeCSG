
var renderer, scene, camera;

window.onload = init;

function init() {
    // info
    var info = document.createElement('div');
    info.style.position = 'absolute';
    info.style.top = '30px';
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.style.color = '#fff';
    info.style.fontWeight = 'bold';
    info.style.backgroundColor = 'transparent';
    info.style.zIndex = '1';
    info.style.fontFamily = 'Monospace';
    info.innerHTML = "three.js - hole in buffer geometry";
    document.body.appendChild(info);

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // scene
    scene = new THREE.Scene();

    // ambient light
    var ambient = new THREE.AmbientLight(0x404040);
    scene.add(ambient);

    // directional light
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(-1, -0.5, 1);
    scene.add(directionalLight);

    // camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(-50, -100, 50);
    camera.up.set( 0, 0, 1 );
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    var material = new THREE.MeshPhongMaterial({color: 0xff0000});

    var smallBoxGeometry = new THREE.BoxGeometry(10, 10, 10);
    var bigBoxGeometry = smallBoxGeometry.clone().scale( 2, 2, 2 );
    var smallBox = new THREE.Mesh( smallBoxGeometry );
    var bigBox = new THREE.Mesh( bigBoxGeometry );
    smallBox.position.set( 0, -5, 5 );

    var result = new ThreeBSP( bigBox ).subtract( new ThreeBSP( smallBox ));

    var bufferGeometry = result.toBufferGeometry();
    var bufferMesh = new THREE.Mesh( bufferGeometry, material );
    bufferMesh.position.setX( -20 );
    scene.add( bufferMesh );

    var geometry = result.toGeometry();
    var mesh = new THREE.Mesh( bufferGeometry, material );
    mesh.position.setX( 20 );
    scene.add( mesh );

    animate();
}

// render
function render() {
    renderer.render(scene, camera);
}

// animate
function animate() {
    requestAnimationFrame(animate);
    render();
}