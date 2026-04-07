const Jimp = require('jimp');

async function processImage(inputPath, outputPath) {
    try {
        const image = await Jimp.read(inputPath);
        
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            
            // Detect blue background: high blue, low red and green
            // Typical blue screen is around rgb(0, 0, 255) to rgb(50, 100, 200)
            if (b > 130 && r < 100 && g < 130) {
                // Set alpha to 0 for blue pixels
                this.bitmap.data[idx + 3] = 0;
            } else if (b > 100 && r < 80 && g < 100) {
                 // Anti-aliasing / edge blending
                 this.bitmap.data[idx + 3] = 128;
            }
        });
        
        await image.writeAsync(outputPath);
        console.log(`Successfully processed ${inputPath} to ${outputPath}`);
    } catch (e) {
        console.error(`Error processing ${inputPath}:`, e);
    }
}

async function main() {
    console.log("Starting background removal...");
    await processImage('C:\\\\Users\\\\NDRH\\\\Downloads\\\\2x3 a.jpg.jpeg', 'public/heru.png');
    await processImage('C:\\\\Users\\\\NDRH\\\\Downloads\\\\2x3 b.jpg.jpeg', 'public/khilma.png');
    console.log("Done");
}

main();
