### Wilt/ThreeCSG Fork

Wilt Changes:

- Cleaned up code (typos and syntax)

- Removed THREE.Face4 support

- Added THREE.BufferGeometry support

Richard changes   
- Fix npm package install


### Install
```
yarn add https://github.com/RichardLindhout/ThreeCSG\#develop
```

### Import
```
import THREE from 'three';
const ThreeBSP = require('three-csg')(THREE);

```



### Example
```
  const box = new THREE.Mesh(new THREE.BoxGeometry(500, 100, 100));
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(100, 50, 50));

  const sBSP = new ThreeBSP(sphere);
  const bBSP = new ThreeBSP(box);

  const sub = bBSP.subtract(sBSP);
  const newMesh = sub.toMesh();
  
  ```
