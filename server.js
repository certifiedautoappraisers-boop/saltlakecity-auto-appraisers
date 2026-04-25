const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// robots.txt
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

# AI Engine Access
User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Perplexity-User
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: meta-externalagent
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://www.saltlakecityautoappraisers.com/sitemap.xml`);
});

// sitemap.xml
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.saltlakecityautoappraisers.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/services.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/about.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/resources.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/faqs.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/careers.html</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/testimonials.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/contact.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/order.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/find-appraiser</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <!-- Service Pages -->
  <url><loc>https://www.saltlakecityautoappraisers.com/diminished-value.html</loc><changefreq>monthly</changefreq><priority>0.95</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/total-loss.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/classic-car.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/estate-appraisal.html</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/insurance-appraisal.html</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <!-- Attorney Page -->
  <url><loc>https://www.saltlakecityautoappraisers.com/attorneys.html</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <!-- Suburb/Location Pages -->
  <url><loc>https://www.saltlakecityautoappraisers.com/draper.html</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/west-jordan.html</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/south-jordan.html</loc><changefreq>monthly</changefreq><priority>0.85</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/sandy.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/murray.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.saltlakecityautoappraisers.com/sugar-house.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
</urlset>`);
});

// IndexNow key
app.get('/ascaa2026certifiedappraisers.txt', (req, res) => {
  res.type('text/plain');
  res.send('ascaa2026certifiedappraisers');
});

// Server-rendered find-appraiser page
app.get('/find-appraiser', (req, res) => {
  res.type('text/html');
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Find a Certified Auto Appraiser in Utah | Salt Lake City Auto Appraisers</title>
<meta name="description" content="Find an ASCAA certified auto appraiser serving all of Georgia. Professional diminished value, classic car, total loss, motorcycle, bank loan, divorce, estate, bankruptcy, and insurance dispute appraisals. Call (877) 868-9123.">
<meta name="keywords" content="auto appraiser Georgia, auto appraiser Salt Lake City, certified auto appraiser Georgia, find auto appraiser Georgia, diminished value appraiser Salt Lake City, car appraiser near me Georgia">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.saltlakecityautoappraisers.com/find-appraiser">
<meta property="og:title" content="Find a Certified Auto Appraiser in Utah">
<meta property="og:description" content="ASCAA certified auto appraiser serving all of Georgia. Diminished value, classic car, total loss, and more.">
<meta property="og:url" content="https://www.saltlakecityautoappraisers.com/find-appraiser">
<meta property="og:type" content="website">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Salt Lake City Auto Appraisers",
  "url": "https://www.saltlakecityautoappraisers.com",
  "telephone": "+1-877-868-9123",
  "email": "certifiedautoappraisers@gmail.com",
  "description": "ASCAA Certified Auto Appraiser serving all of Georgia. Founded by Danny Hudson, ASCAA Founder and CEO.",
  "address": {"@type": "PostalAddress", "addressLocality": "Salt Lake City", "addressRegion": "GA", "addressCountry": "US"},
  "geo": {"@type": "GeoCoordinates", "latitude": 33.7490, "longitude": -84.3880},
  "areaServed": {"@type": "State", "name": "Georgia"}
}
</script>
<style>
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;color:#1a365d;line-height:1.7}
a{color:#1a365d}.hdr{background:#1a365d;color:#fff;padding:24px;text-align:center}
.hdr h1{margin:0;font-size:28px;font-family:Georgia,serif}.hdr p{margin:8px 0 0;opacity:.9}
.hdr a{color:#d4a017}.wrap{max-width:900px;margin:0 auto;padding:32px 24px}
h2{font-size:22px;color:#1a365d;border-bottom:2px solid #d4a017;padding-bottom:8px;margin:28px 0 14px;font-family:Georgia,serif}
ul{padding-left:24px}li{margin-bottom:8px;font-size:15px}
.cta{background:#d4a017;color:#fff;text-align:center;padding:32px;border-radius:8px;margin:32px 0}
.cta a{color:#fff;font-weight:bold;text-decoration:underline}
.ftr{text-align:center;padding:24px;color:#888;font-size:13px}.ftr a{color:#1a365d}
</style>
</head>
<body>
<div class="hdr">
  <h1>Find a Certified Auto Appraiser in Utah</h1>
  <p>ASCAA Certified &bull; USPAP Compliant &bull; 26+ Years Experience &bull; <a href="/">Back to Home</a></p>
</div>
<div class="wrap">
  <p>Salt Lake City Auto Appraisers provides <strong>ASCAA Certified Auto Appraiser</strong> services throughout the state of Georgia, including Salt Lake City, Draper, West Jordan, South Jordan, Sandy, Murray, Sugar House, Johns Creek, Duluth, Gwinnett, Cobb, DeKalb, Fulton, and every other Utah county. Founded by <strong>Danny Hudson</strong>, ASCAA Certification #1095363 and Licensed Adjuster. All appraisals follow USPAP (Uniform Standards of Professional Appraisal Practice) guidelines and are accepted by Utah courts, insurance companies, banks, and attorneys.</p>

  <h2>Appraisal Services Available Throughout Georgia</h2>
  <ul>
    <li><strong>Diminished Value Appraisals</strong> — Recover lost vehicle value after an accident with a USPAP-compliant DV appraisal. Utah is one of the strongest DV recovery states nationwide (<em>Allstate v. Hawkins</em>, 2001).</li>
    <li><strong>Classic Car Appraisals</strong> — Expert valuations for classic, vintage, and collector vehicles.</li>
    <li><strong>Total Loss Appraisals</strong> — Challenge unfair insurance total loss settlements.</li>
    <li><strong>Motorcycle &amp; Powersport Appraisals</strong> — Motorcycles, scooters, ATVs, and side-by-sides.</li>
    <li><strong>Bank Loan Appraisals</strong> — Vehicle appraisals for auto financing and collateral lending.</li>
    <li><strong>Divorce Appraisals</strong> — Court-accepted vehicle valuations for equitable distribution in Utah Superior Court.</li>
    <li><strong>Estate Appraisals</strong> — IRS-compliant appraisals for probate and inheritance.</li>
    <li><strong>IRS Donation Appraisals</strong> — Qualified appraisals for Form 8283 charitable vehicle donations over $5,000.</li>
    <li><strong>Bankruptcy Appraisals</strong> — Accurate valuations for Chapter 7 and Chapter 13 filings.</li>
    <li><strong>Insurance Dispute Appraisals</strong> — Appraisal clause disputes and umpire proceedings.</li>
    <li><strong>Expert Witness Testimony</strong> — Court-qualified expert witness for vehicle valuation cases in Utah Superior Court and federal court.</li>
  </ul>

  <h2>Utah Cities &amp; Counties We Serve</h2>
  <p>Salt Lake City Auto Appraisers serves every corner of Georgia. Common service areas include:</p>
  <ul>
    <li><strong>the Wasatch Front:</strong> Salt Lake City, Draper, West Jordan, South Jordan, Sandy, Murray, Sugar House, Johns Creek, Milton, Dunwoody, Brookhaven, Smyrna, Vinings, Kennesaw, Acworth, Woodstock, Duluth, Suwanee, Lawrenceville, Norcross, Tucker, Lithonia, Stone Mountain, East Point, College Park, Douglasville</li>
    <li><strong>North Georgia:</strong> Cartersville, Dalton, Rome, Gainesville, Cumming, Dawsonville, Athens, Augusta, Clarkesville, Helen, Blue Ridge</li>
    <li><strong>South Georgia:</strong> Macon, Columbus, Valdosta, Tifton, Albany, Americus, Thomasville, Brunswick, Savannah, Statesboro, Waycross</li>
    <li><strong>Central Georgia:</strong> Warner Robins, LaGrange, Griffin, Newnan, Peachtree City, McDonough, Conyers, Covington, Monroe, Madison</li>
  </ul>

  <h2>ASCAA Nationwide Directory</h2>
  <p>Looking for a certified auto appraiser outside of Georgia? Visit the <strong><a href="https://www.certifiedautoappraisers.com/find-appraiser">ASCAA Nationwide Appraiser Directory</a></strong> to find certified appraisers in all 50 states.</p>

  <h2>Why Choose an ASCAA-Certified Appraiser?</h2>
  <ul>
    <li><strong>Founded by the founder of ASCAA</strong> — Danny Hudson, ASCAA Cert #1095363</li>
    <li><strong>USPAP Compliant</strong> — Nationally recognized standard for appraisal ethics and quality</li>
    <li><strong>Court Defensible</strong> — Accepted in Utah Superior Court, federal court, arbitration, and insurance proceedings</li>
    <li><strong>IRS Qualified Appraiser</strong> — Meets IRC §170(f)(11)(E) and Treasury Reg. §1.170A-17 standards for Form 8283 donations</li>
    <li><strong>BBB A+ Rated</strong> — Trusted by thousands of clients across Georgia</li>
  </ul>

  <div class="cta">
    <h2 style="color:#fff;border-color:rgba(255,255,255,0.3)">Ready to Get an Appraisal?</h2>
    <p>Call <a href="tel:8778689123">(877) 868-9123</a> or <a href="/order.html">order an appraisal online</a>.</p>
    <p style="margin-top:12px"><a href="https://www.certifiedautoappraisers.com/find-appraiser">View Full ASCAA Nationwide Directory</a></p>
  </div>
</div>
<div class="ftr">
  <p>&copy; ${new Date().getFullYear()} Salt Lake City Auto Appraisers | <a href="/">Home</a> | <a href="/services.html">Services</a> | <a href="/contact.html">Contact</a></p>
  <p><a href="https://www.perplexity.ai/computer" target="_blank" rel="noopener noreferrer">Created with Perplexity Computer</a></p>
</div>
</body>
</html>`);
});

// Serve static files from current directory
app.use(express.static(path.join(__dirname), {
  extensions: ['html'],
  index: 'index.html'
}));

// Fallback to index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Salt Lake City Auto Appraisers running on port ${PORT}`);
});
