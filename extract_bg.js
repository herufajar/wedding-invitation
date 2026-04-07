const fs = require('fs');

try {
    const html = fs.readFileSync('c:\\\\Users\\\\NDRH\\\\Downloads\\\\background\\\\background.html', 'utf8');
    const match = html.match(/src="data:image\/(jpeg|png|webp|jpg);base64,([^"]+)"/i);

    if (match && match[2]) {
        let ext = match[1].toLowerCase();
        if (ext === 'jpeg') ext = 'jpg';
        const base64Data = match[2];
        fs.mkdirSync('public', {recursive: true});
        fs.writeFileSync(`public/background.${ext}`, base64Data, 'base64');
        console.log(`Extracted to public/background.${ext}`);
    } else {
        console.log("Base64 string not found in background.html.");
    }
} catch (e) {
    console.error("Error extracting background:", e);
}
