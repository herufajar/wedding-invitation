const Jimp = require('jimp');

async function processGunungan() {
    try {
        const image = await Jimp.read('C:\\Users\\NDRH\\.gemini\\antigravity\\brain\\7e539560-7aeb-44ce-acbf-0e6bfe3f79c1\\gunungan_vector_1775585517680.png');
        
        // Target gold color: #f0d27f (R: 240, G: 210, B: 127)
        // We will make white pixels transparent.
        // We will make black/dark pixels GOLD.
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // If pixel is mostly white (luminance > 200), make it transparent
            const luminance = 0.299*r + 0.587*g + 0.114*b;
            if (luminance > 150) {
                this.bitmap.data[idx + 3] = 0; // Alpha = 0
            } else {
                // It's a dark line, change its color to Gold
                this.bitmap.data[idx + 0] = 240;
                this.bitmap.data[idx + 1] = 210;
                this.bitmap.data[idx + 2] = 127;
                // Leave alpha intact (or make it fully opaque)
                this.bitmap.data[idx + 3] = 255;
            }
        });

        await image.writeAsync('C:\\Users\\NDRH\\Downloads\\wedding\\wedding\\public\\gunungan.png');
        console.log('Gunungan processed successfully!');
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

processGunungan();
