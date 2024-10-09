# MSRC

## Install Procedures
> [!WARNING]
> A reminder that this is only designed to run as a web or Windows machine. This is NOT designed for OSX/Ubuntu. This may may have major bugs and/or be a completely unusable software. 

1. For installing Electon and its dependencies:
```
npm install --save-dev electron
```


2. For installing React dependencies, run:
```
npm install --save-dev @babel/core @babel/preset-react babel-loader

npm install react-router-dom

npm install copy-webpack-plugin --save-dev
```

3. For installing three.js (3D Model Renderer), run:
```
npm install three
```

> [!NOTE]
> All of these will be added to the `.gitignore`, so no worries on uploading/downloading all these files.