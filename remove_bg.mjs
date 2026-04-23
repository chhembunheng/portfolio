import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function main() {
    console.log('Starting background removal...');
    const imagePath = '/home/wintech/.gemini/antigravity/brain/9684dcb6-80c3-425a-a1ff-d43ecdad1349/media__1776929058338.png';
    const outputPath = '/home/wintech/portfolio/public/profile.png';
    
    try {
        const imageBuffer = fs.readFileSync(imagePath);
        const blob = new Blob([imageBuffer], { type: 'image/png' });
        
        const resultBlob = await removeBackground(blob);
        const resultBuffer = Buffer.from(await resultBlob.arrayBuffer());
        
        fs.writeFileSync(outputPath, resultBuffer);
        console.log('Background removed successfully and saved to', outputPath);
    } catch (e) {
        console.error('Failed to remove background:', e);
        process.exit(1);
    }
}

main();
