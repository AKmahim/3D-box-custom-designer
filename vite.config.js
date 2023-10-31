import copy from 'rollup-plugin-copy'; // Import the copy plugin

export default {
  build: {
    rollupOptions: {
      input: {
        index: './src/index.js',      // Entry point for index.html
        upload_texture: './src/upload-texture.js',    // Entry point for about.html
        box_editor: './src/box-editor.js', // Entry point for contact.html
        fabric:'./src/fabric.js'
      },
      plugins: [
        copy({
          targets: [
            { src: 'index.html', dest: 'dist' }, // Add each HTML file here
            { src: './upload_texture.html', dest: 'dist' },
            { src: './box_editor.html', dest: 'dist' },
          ],
        }),
      ],
    },
  },
};
