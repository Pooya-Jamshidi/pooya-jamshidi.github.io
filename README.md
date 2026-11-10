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

## Teaching summaries and lecture slides

Each of the seven lecturer courses has an expandable section in Teaching.
Until you add content, it shows a short message that the overview and slides
are not available yet. No sample files are published.

Edit the matching entry in `courses` in `site-config.js`:

```js
'big-data': {
  overview: 'Your description of what you taught.',
  topics: ['Your first topic', 'Your second topic'],
  slides: [
    { title: 'Lecture 1: Introduction', url: 'teaching/big-data/lecture-01.pdf' },
    { title: 'Lecture 2', url: 'teaching/big-data/lecture-02.pdf' }
  ]
},
```

Replace the example text with your actual course content. Copy the files into
that course's folder under `teaching/`. Add as many slide entries as needed;
PDF, PowerPoint files, and external HTTPS links are supported. Leave the
fields empty until ready. Each course has its own folder and configuration
key: `big-data`, `basic-programming`, `networks-lab`, `architecture-lab`,
`data-structures`, `game-theory`, and `digital-design-lab`.

Commit and push both the configuration and files to publish them. This is
managed through the repository, with no public upload form. Teaching
assistantships remain listed separately.
