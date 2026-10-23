# Pooya Jamshidi — Academic Website

## Google Scholar, employer websites, and paper PDFs

Edit `site-config.js` to set your Google Scholar profile URL and each employer's
website. Use full `https://` URLs. Empty entries are hidden; organization names
remain visible without a link until configured.

To publish a PDF:

1. Copy the PDF into `papers/`, for example `papers/fl-protectx.pdf`.
2. Set its entry in `paperPdfs`, for example
   `'fl-protectx': 'papers/fl-protectx.pdf'`.
3. Commit and publish the PDF and configuration with the rest of the site.

The PDF link appears beside that paper in Publications and, where applicable,
Recent publications. Existing publisher and preprint links remain available.
For a new publication, add its HTML entry in `index.html` with a unique
`data-paper` key and matching configuration entry. Include `data-search` text
for publication search. Files are published through the repository; there is
no visitor upload form or server storage.

Adan AI is the only current professional role. The RamanAI roles and Ilam
University AI Engineer role ended in October 2026.
