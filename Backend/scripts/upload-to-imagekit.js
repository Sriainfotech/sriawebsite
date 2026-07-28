require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const fs = require('fs');
const path = require('path');
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const FRONTEND = path.join(__dirname, '..', '..', 'Frontend');

// local file -> ImageKit destination folder, matching the site's existing sria/... convention
const FILES = [
    // Logos
    ['public/Logos/sria_logo.png', 'sria/logos'],
    ['public/Logos/jatayu.webp', 'sria/logos'],
    ['public/Logos/nxd.png', 'sria/logos'],
    ['public/Logos/eskoolia_logo.png', 'sria/logos'],
    ['public/Logos/nxgen_logo.png', 'sria/logos'],
    ['public/Logos/Sria Infotech Pvt Ltd..png', 'sria/logos'],
    ['public/Logos/Cashora.jpeg', 'sria/logos'],
    ['public/Logos/Emblem_of_Telangana.webp', 'sria/logos'],
    ['public/Logos/camp.jpg', 'sria/logos'],
    ['public/Logos/kims.png', 'sria/logos'],
    ['public/Logos/alekya.png', 'sria/logos'],
    ['public/royal-logo.png', 'sria/logos'],
    // Clients
    ['public/Clients/savadia.png', 'sria/clients'],
    ['public/Clients/onfocus.png', 'sria/clients'],
    ['public/Clients/MSPL.webp', 'sria/clients'],
    ['public/Clients/patil.png', 'sria/clients'],
    ['public/Clients/lvk.png', 'sria/clients'],
    ['public/Clients/live-ramp.png', 'sria/clients'],
    ['public/Clients/stannik.png', 'sria/clients'],
    // Event photos
    ['public/event photos/ow1.jpeg', 'sria/events'],
    ['public/event photos/ow2.jpeg', 'sria/events'],
    ['public/event photos/ow3.jpeg', 'sria/events'],
    ['public/event photos/ow4.jpeg', 'sria/events'],
    ['public/event photos/ow5.jpeg', 'sria/events'],
    ['public/event photos/ow6.jpeg', 'sria/events'],
    ['public/event photos/ow7.jpeg', 'sria/events'],
    ['public/event photos/ow8.jpeg', 'sria/events'],
    ['public/event photos/ow9.jpeg', 'sria/events'],
    ['public/event photos/ow10.jpeg', 'sria/events'],
    // Gallery (BSNL partnership signing)
    ['public/gallery/bsnl-partnership-signing-01.jpeg', 'sria/gallery'],
    ['public/gallery/bsnl-partnership-signing-02.jpeg', 'sria/gallery'],
    ['public/gallery/bsnl-partnership-signing-03.jpeg', 'sria/gallery'],
    ['public/gallery/bsnl-partnership-signing-04.jpeg', 'sria/gallery'],
    ['public/gallery/bsnl-partnership-signing-05.jpeg', 'sria/gallery'],
    ['public/gallery/bsnl-partnership-signing-06.jpeg', 'sria/gallery'],
    // Partner hero/content photos
    ['public/bsnl-hero.jpg', 'sria/partners'],
    ['public/bsnl-main.jpg', 'sria/partners'],
    ['public/task-skill-partner.jpg', 'sria/partners'],
    ['public/task-main.jpg', 'sria/partners'],
    ['public/soft-skill-comm.jpg', 'sria/partners'],
    ['public/student.jpg', 'sria/partners'],
    ['public/tg.jpg', 'sria/partners'],
    ['public/thub.jpg', 'sria/partners'],
    // SAP Analytics dashboard screenshots
    ['public/sap-analytics/cfo-summary-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-summary-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-balance-sheet-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-balance-sheet-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-pnl-yearly-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-pnl-yearly-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-ratios-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cfo-ratios-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cost-plant-comparison-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/cost-plant-comparison-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/exec-dashboard-logo.png', 'sria/sap-analytics'],
    ['public/sap-analytics/wc-comparison-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/wc-comparison-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/wc-dashboard-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/wc-dashboard-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-quantity-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-quantity-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/customer-sales-analysis-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/customer-sales-analysis-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-comparison-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-comparison-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-avg-price-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-avg-price-thumb.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-analysis-full.jpg', 'sria/sap-analytics'],
    ['public/sap-analytics/sales-analysis-thumb.jpg', 'sria/sap-analytics'],
    // src/assets hero & service images
    ['src/assets/hero-home.jpg', 'sria/home'],
    ['src/assets/hero-about.jpg', 'sria/about'],
    ['src/assets/hero-careers.jpg', 'sria/about'],
    ['src/assets/hero-contact.jpg', 'sria/home'],
    ['src/assets/hero-services.jpg', 'sria/services'],
    ['src/assets/hero-solutions.jpg', 'sria/services'],
    ['src/assets/about-office.jpg', 'sria/about'],
    ['src/assets/about-team.jpg', 'sria/about'],
    ['src/assets/service-cloud.jpg', 'sria/services'],
    ['src/assets/service-digital.jpg', 'sria/services'],
    ['src/assets/service-managed.jpg', 'sria/services'],
    ['src/assets/service-sap.jpg', 'sria/services'],
];

async function main() {
    const results = [];
    for (const [rel, folder] of FILES) {
        const abs = path.join(FRONTEND, rel);
        if (!fs.existsSync(abs)) {
            results.push({ rel, folder, error: 'LOCAL FILE NOT FOUND' });
            continue;
        }
        const fileName = path.basename(rel);
        try {
            const res = await imagekit.upload({
                file: fs.readFileSync(abs),
                fileName,
                folder,
                useUniqueFileName: false,
            });
            results.push({ rel, folder, url: res.url });
            console.log(`OK   ${rel} -> ${res.url}`);
        } catch (err) {
            results.push({ rel, folder, error: err.message });
            console.log(`FAIL ${rel} -> ${err.message}`);
        }
    }
    fs.writeFileSync(
        path.join(__dirname, 'upload-results.json'),
        JSON.stringify(results, null, 2)
    );
    console.log(`\nDone. ${results.filter(r => r.url).length}/${results.length} uploaded. See upload-results.json`);
}

main();
