# QuickCreate by VirtualLandManager                                       

## Installation

### Step 1: Install VLM QuickCreate Dependency

*Using VS Code Extension (Beginner):*
1. Hit the + button in top right of the Dependencies panel.
2. When asked, "Is this a Decentraland library?" choose Yes.
3. Type `vlm-dcl-qc@sdk7` and press Enter/Return

*Via CLI (Advanced Option)*
Run `npm install vlm-dcl-qc@sdk7` from your project folder.

### Step 2: Import QuickCreate into your file

```import QuickCreate from 'vlm-dcl-qc'```

^ COPY THIS IMPORT TO THE TOP OF THE FILE ^

## Using QuickCreate

### Images

-- Adding an image with Image() --
- `path` is the URL of your image
- Provide `position`, `scale`, and `rotation` coordinates to control its position in space
  
•·················• CODE EXAMPLE •·················•
```
new QuickCreate.Image({
  path: 'https://picsum.photos/1920/1080',
  position: { x: 5, y: 3, z: 0 },
  scale: { x: 1.92, y: 1.08, z: 1 },
  rotation: { x: 0, y: 90, z: 0 }
})
```
•·························•························•

### Video Screens

-- Adding a dynamic video screen with Video() --
- `liveUrl` will be used when the stream is live.
- `playlist` will be looped through when the stream is offline.


•·················• CODE EXAMPLE •·················•
```
new QuickCreate.VideoScreen({
  liveUrl: 'https://streams.vlm.gg/live/vlm/index.m3u8',
  playlist: ['https://api.vlm.gg/media/demo-video/1.mp4', 'https://api.vlm.gg/media/demo-video/2.mp4'],
  position: { x: 5, y: 5, z: 8 },
  scale: { x: 1.92, y: 1.08, z: 0.1 },
  rotation: { x: 0, y: 90, z: 0 }
})
```
•·························•························•

### 3D Models

-- Adding a GLB with Mesh() --
- By default, looks within the /models folder for the GLB. 
- Just add file name as a string to the `path` property.

•·················• CODE EXAMPLE •·················•
```
new QuickCreate.Mesh({
  path: 'building.glb',
  position: { x: 8, y: 3, z: 8 }
})
```
•·························•························•

### Auto-Dance Area

-- Adding an auto-dance area with DanceFloor() --
- Sets up a cube where people will dance when their feet are inside it.
- Toggle the auto-dance with `VLM.toggleAutoDance()`
- To set a certain auto-dance state, use `VLM.toggleAutoDance(true)` or `VLM.toggleAutoDance(false)`

•·················• CODE EXAMPLE •·················•
```
new QuickCreate.DanceFloor({
      position: { x: 0, y: 8, z: 8 },
      scale: { x: 32, y: 26, z: 16 },
      debug: false, // optional - shows a box where the dance floor to see the position during development
      enabledOnLoad: true // optional - if false, the dance floor will be disabled when the scene loads. 
    })
```
•·························•························•
