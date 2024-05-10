
// Assuming you have an array of document data like this
    const documentData = [
    {title: 'CDC Generic Stakeholder Presentation', description: 'Stakeholder Presentation', link: 'https://extranet.coega.co.za/ealbum/content/Coega_Generic_Stakeholder_Presentation/index-h5.html#page=1' },
    {title: 'CDC Investors & Clients Portfolio', description: 'Investors & Clients Portfolio', link: 'https://example.com/document2.pdf' },
    {title: 'Social Media Policy', description: 'Social Media Policy', link: 'http://sp.coega.co.za/CDCPolicies/Policies/Social%20Media.pdf' },
    {title: 'CDC VACC Booklet', description: 'VACC Booklet', link: 'https://extranet.coega.co.za/DocumentLibrary/2024/01/VACC_Marketing_Brochure.pdf' },
    {title: 'Coega Maths and Science Handbook', description: 'Maths and Science Handbook', link: 'https://extranet.coega.co.za/ealbum/content/Maths_and_Science_Handbook/index-h5.html#page=1' },
    {title: 'Coega Africa Programme', description: 'Coega Africa Programme', link: 'https://extranet.coega.co.za/DocumentLibrary/2024/01/Coega_Africa_Programme.pdf' },
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
