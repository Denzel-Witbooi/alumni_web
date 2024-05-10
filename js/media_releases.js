
// Assuming you have an array of document data like this
const documentData = [
    { title: 'COEGA MATHS AND SCIENCE PROGRAMME', description: 'ACHIEVES CONSECUTIVE 100% PASS RATE...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=2482' },
    { title: 'CDC FLAGSHIP CSI', description: 'PROGRAMME CENTRE STAGE AT GCIS EXPO...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=2407' },
    { title: 'COEGA MATHS AND SCIENCE PROGRAMME RESULTS', description: 'Having celebrated a 100% pass rate for the Coega MSP...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=2477' },
    { title: 'CDC INTERNSHIP PROGRAMME', description: ' CONTRIBUTES TO JOB CREATION...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=2445' },
    { title: 'CDC MICT SETA ICT', description: 'GRADUATE PROGRAMME...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=2389' },
    { title: 'CDC ICT GRADUATE INTERNS CONFIDENT', description: 'THEIR FUTURE IN THE SOUTH AFRICAN JOB MARKET...', link: 'https://coega.co.za/site/media/media-releases/media-article?mediaId=1283' },
    // Add more document entries as needed
];

// Function to filter documents based on search input
function filterDocuments() {
    const searchInput = document.getElementById('documentSearch').value.toLowerCase();
    const filteredDocuments = documentData.filter(document =>
        document.title.toLowerCase().includes(searchInput) ||
        document.description.toLowerCase().includes(searchInput)
    );
    renderDocumentCards(filteredDocuments);
}

// Function to generate HTML for document cards
function generateDocumentCards(documentList) {
    let html = '';
    documentList.forEach(document => {
        html += `
<div class="col-md-4">
 <div class="document-card">
     <h4>${document.title}</h4>
     <p>${document.description}</p>
     <a href="${document.link}" target="_blank" class="btn btn-primary">Click here</a>
 </div>
</div>
`;
    });
    return html;
}

// Function to render document cards
function renderDocumentCards(documentList) {
    const documentListContainer = document.querySelector('.document-list-container');
    documentListContainer.innerHTML = generateDocumentCards(documentList);
}

// Function to initialize the page
function initPage() {
    renderDocumentCards(documentData);
    // ... (your existing initialization code)
}

// Initialize the page
initPage();
