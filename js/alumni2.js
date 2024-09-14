
// Sample alumni data
const alumniData = [
    { name: 'John Doe', position: 'Manager', place: 'Eastern Cape, Port Elizabeth', gender: 'Male', startDate: '12 Nov 2014', endDate: '31-May-2016', email: 'john.doe@example.com', phone: '+123456789', location: 'Eastern Cape, South Africa', description: 'Worked in BD', bu: 'Business Development (BD)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'Worked in CEO\'s Office', bu: 'CEO\'s Office' },
    { name: 'Emily Brown', position: 'Software Developer', place: 'KwaZulu-Natal, Durban', gender: 'Female', startDate: '20 Aug 2016', endDate: '15-Dec-2018', email: 'emily.brown@example.com', phone: '+111222333', location: 'KwaZulu-Natal, South Africa', description: 'Worked in ICT', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Michael Johnson', position: 'Financial Analyst', place: 'Gauteng, Johannesburg', gender: 'Male', startDate: '10 Sep 2017', endDate: '28-Feb-2020', email: 'michael.johnson@example.com', phone: '+444555666', location: 'Gauteng, South Africa', description: 'Worked in Finance', bu: 'Finance' },
    { name: 'Sarah Williams', position: 'HR Manager', place: 'Free State, Bloemfontein', gender: 'Female', startDate: '25 Mar 2018', endDate: '15-Sep-2021', email: 'sarah.williams@example.com', phone: '+777888999', location: 'Free State, South Africa', description: 'Worked in Corporate Services', bu: 'Corporate Services (CS)' },
    { name: 'James Lee', position: 'Operations Specialist', place: 'Mpumalanga, Nelspruit', gender: 'Male', startDate: '01 Dec 2015', endDate: '30-Apr-2019', email: 'james.lee@example.com', phone: '+333444555', location: 'Mpumalanga, South Africa', description: 'Worked in Operations', bu: 'Operations' },
    { name: 'Olivia Harris', position: 'Project Manager', place: 'Northern Cape, Kimberley', gender: 'Female', startDate: '05 Feb 2019', endDate: '15-Jul-2021', email: 'olivia.harris@example.com', phone: '+999000111', location: 'Northern Cape, South Africa', description: 'Worked in Coega Africa Programme', bu: 'Coega Africa Programme (CAP)' },
    { name: 'William Clark', position: 'Research Analyst', place: 'Limpopo, Polokwane', gender: 'Male', startDate: '12 May 2020', endDate: '31-Oct-2022', email: 'william.clark@example.com', phone: '+555666777', location: 'Limpopo, South Africa', description: 'Worked in IRS', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Sophia Davis', position: 'Procurement Officer', place: 'Eastern Cape, East London', gender: 'Female', startDate: '08 Jun 2017', endDate: '30-Dec-2019', email: 'sophia.davis@example.com', phone: '+888999000', location: 'Eastern Cape, South Africa', description: 'Worked in NDPW', bu: 'NDPW Unit' },
    { name: 'Daniel Martinez', position: 'Legal Advisor', place: 'Western Cape, Stellenbosch', gender: 'Male', startDate: '18 Jul 2016', endDate: '31-May-2018', email: 'daniel.martinez@example.com', phone: '+222333444', location: 'Western Cape, South Africa', description: 'Worked in BD External Services', bu: 'Business Development (BD) External Services' },
    { name: 'Sophia Green', position: 'Business Consultant', place: 'North West, Rustenburg', gender: 'Female', startDate: '10 Mar 2014', endDate: '31-Dec-2016', email: 'sophia.green@example.com', phone: '+111222333', location: 'North West, South Africa', description: 'Worked in Small Business Finance', bu: 'Small Business Finance Unit (SBFU)' },
    { name: 'David King', position: 'Sustainability Coordinator', place: 'Eastern Cape, Grahamstown', gender: 'Male', startDate: '05 Jan 2015', endDate: '30-Jun-2017', email: 'david.king@example.com', phone: '+444555666', location: 'Eastern Cape, South Africa', description: 'Worked in Sustainability', bu: 'Sustainability' },
    { name: 'Abigail Adams', position: 'Marketing Specialist', place: 'Gauteng, Pretoria', gender: 'Female', startDate: '01 Feb 2012', endDate: '31-Aug-2015', email: 'abigail.adams@example.com', phone: '+27123456789', location: 'Gauteng, South Africa', description: 'Worked in Marketing', bu: 'Business Development (BD)' },
    { name: 'Brandon Carter', position: 'Systems Administrator', place: 'Mpumalanga, Mbombela', gender: 'Male', startDate: '15 Apr 2015', endDate: '30-Oct-2017', email: 'brandon.carter@example.com', phone: '+27234567890', location: 'Mpumalanga, South Africa', description: 'Maintained IT Systems', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Catherine Foster', position: 'Legal Counsel', place: 'KwaZulu-Natal, Durban', gender: 'Female', startDate: '10 Nov 2014', endDate: '30-Apr-2018', email: 'catherine.foster@example.com', phone: '+27345678901', location: 'KwaZulu-Natal, South Africa', description: 'Legal support for projects', bu: 'CEO\'s Office' },
    { name: 'David Bell', position: 'Environmental Consultant', place: 'Northern Cape, Upington', gender: 'Male', startDate: '05 Jun 2016', endDate: '15-Dec-2019', email: 'david.bell@example.com', phone: '+27456789012', location: 'Northern Cape, South Africa', description: 'Worked in Sustainability', bu: 'Sustainability' },
    { name: 'Elena Martin', position: 'Project Coordinator', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '25 Mar 2017', endDate: '30-Aug-2021', email: 'elena.martin@example.com', phone: '+27567890123', location: 'Western Cape, South Africa', description: 'Coordinated IPD projects', bu: 'Infrastructure Planning and Development (IPD)' },
    { name: 'Frank Harris', position: 'HR Officer', place: 'Eastern Cape, Mthatha', gender: 'Male', startDate: '01 Jan 2018', endDate: '30-Sep-2021', email: 'frank.harris@example.com', phone: '+27678901234', location: 'Eastern Cape, South Africa', description: 'Handled HR operations', bu: 'Corporate Services (CS)' },
    { name: 'Grace Turner', position: 'Financial Manager', place: 'North West, Mafikeng', gender: 'Female', startDate: '12 Jul 2016', endDate: '28-Feb-2020', email: 'grace.turner@example.com', phone: '+27789012345', location: 'North West, South Africa', description: 'Managed finances', bu: 'Finance' },
    { name: 'Henry Wright', position: 'Operations Lead', place: 'Limpopo, Thohoyandou', gender: 'Male', startDate: '15 Sep 2019', endDate: '31-Jul-2022', email: 'henry.wright@example.com', phone: '+27890123456', location: 'Limpopo, South Africa', description: 'Led operational projects', bu: 'Operations' },
    { name: 'Isabella Reed', position: 'Communications Officer', place: 'Western Cape, Stellenbosch', gender: 'Female', startDate: '05 Dec 2015', endDate: '15-Nov-2018', email: 'isabella.reed@example.com', phone: '+27901234567', location: 'Western Cape, South Africa', description: 'Managed communications', bu: 'Business Development (BD) External Services' },
    { name: 'Jacob Hughes', position: 'Procurement Specialist', place: 'Free State, Bethlehem', gender: 'Male', startDate: '10 Feb 2017', endDate: '31-Oct-2020', email: 'jacob.hughes@example.com', phone: '+27101234567', location: 'Free State, South Africa', description: 'Procured materials and services', bu: 'NDPW Unit' },
    { name: 'Karen Wilson', position: 'Data Analyst', place: 'Gauteng, Johannesburg', gender: 'Female', startDate: '02 May 2014', endDate: '15-Jun-2017', email: 'karen.wilson@example.com', phone: '+27212345678', location: 'Gauteng, South Africa', description: 'Analyzed project data', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Leonard Green', position: 'Risk Manager', place: 'KwaZulu-Natal, Pietermaritzburg', gender: 'Male', startDate: '15 Aug 2015', endDate: '30-Nov-2019', email: 'leonard.green@example.com', phone: '+27323456789', location: 'KwaZulu-Natal, South Africa', description: 'Managed risks for BD', bu: 'Business Development (BD)' },
    { name: 'Megan Clark', position: 'IT Support Technician', place: 'Northern Cape, Kimberley', gender: 'Female', startDate: '12 Sep 2016', endDate: '31-Jan-2020', email: 'megan.clark@example.com', phone: '+27434567890', location: 'Northern Cape, South Africa', description: 'Supported IT infrastructure', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Nathan Roberts', position: 'Business Analyst', place: 'Mpumalanga, Witbank', gender: 'Male', startDate: '10 Oct 2018', endDate: '30-Dec-2021', email: 'nathan.roberts@example.com', phone: '+27545678901', location: 'Mpumalanga, South Africa', description: 'Analyzed business processes', bu: 'Corporate Services (CS)' },
    { name: 'Olivia Morris', position: 'Sustainability Consultant', place: 'Eastern Cape, East London', gender: 'Female', startDate: '18 Nov 2013', endDate: '31-May-2016', email: 'olivia.morris@example.com', phone: '+27656789012', location: 'Eastern Cape, South Africa', description: 'Consulted on sustainability initiatives', bu: 'Sustainability' },
    { name: 'Peter Collins', position: 'Financial Analyst', place: 'Western Cape, George', gender: 'Male', startDate: '10 Mar 2017', endDate: '30-Aug-2020', email: 'peter.collins@example.com', phone: '+27767890123', location: 'Western Cape, South Africa', description: 'Analyzed financial data', bu: 'Finance' },
    { name: 'Quincy Evans', position: 'Architect', place: 'KwaZulu-Natal, Richards Bay', gender: 'Male', startDate: '02 Jul 2016', endDate: '30-Nov-2019', email: 'quincy.evans@example.com', phone: '+27878901234', location: 'KwaZulu-Natal, South Africa', description: 'Designed infrastructure projects', bu: 'Infrastructure Planning and Development (IPD)' },
    { name: 'Rebecca Scott', position: 'HR Consultant', place: 'Gauteng, Pretoria', gender: 'Female', startDate: '05 May 2019', endDate: '31-Dec-2021', email: 'rebecca.scott@example.com', phone: '+27189012345', location: 'Gauteng, South Africa', description: 'Consulted on HR matters', bu: 'Corporate Services (CS)' },
    { name: 'Samuel Turner', position: 'Operations Coordinator', place: 'Limpopo, Polokwane', gender: 'Male', startDate: '01 Aug 2015', endDate: '31-Jul-2019', email: 'samuel.turner@example.com', phone: '+27290123456', location: 'Limpopo, South Africa', description: 'Coordinated operations', bu: 'Operations' },
    { name: 'Tina Foster', position: 'Legal Officer', place: 'Eastern Cape, Port Elizabeth', gender: 'Female', startDate: '18 Feb 2017', endDate: '31-Dec-2020', email: 'tina.foster@example.com', phone: '+27301234567', location: 'Eastern Cape, South Africa', description: 'Provided legal support', bu: 'CEO\'s Office' },
    { name: 'Victor Lopez', position: 'Business Consultant', place: 'North West, Klerksdorp', gender: 'Male', startDate: '05 Mar 2018', endDate: '15-Jan-2022', email: 'victor.lopez@example.com', phone: '+27412345678', location: 'North West, South Africa', description: 'Consulted on business strategies', bu: 'Business Development (BD) External Services' },
    { name: 'Wendy Adams', position: 'Marketing Analyst', place: 'Free State, Bloemfontein', gender: 'Female', startDate: '15 Sep 2015', endDate: '30-Jun-2019', email: 'wendy.adams@example.com', phone: '+27523456789', location: 'Free State, South Africa', description: 'Analyzed marketing data', bu: 'Business Development (BD)' },
    { name: 'Xavier Bennett', position: 'Procurement Manager', place: 'Western Cape, Paarl', gender: 'Male', startDate: '10 Jan 2016', endDate: '31-Oct-2018', email: 'xavier.bennett@example.com', phone: '+27634567890', location: 'Western Cape, South Africa', description: 'Managed procurement processes', bu: 'NDPW Unit' },
    { name: 'Yvonne Morgan', position: 'IT Project Manager', place: 'Gauteng, Sandton', gender: 'Female', startDate: '12 Jul 2018', endDate: '30-Nov-2021', email: 'yvonne.morgan@example.com', phone: '+27745678901', location: 'Gauteng, South Africa', description: 'Managed IT projects', bu: 'ICT, Research and Strategy (IRS)' },
    { name: 'Zachary Bell', position: 'Quality Assurance Lead', place: 'KwaZulu-Natal, Durban', gender: 'Male', startDate: '05 May 2015', endDate: '31-Dec-2019', email: 'zachary.bell@example.com', phone: '+27856789012', location: 'KwaZulu-Natal, South Africa', description: 'Led quality assurance', bu: 'Operations' },
    { name: 'Alice Watson', position: 'Sustainability Analyst', place: 'Eastern Cape, Grahamstown', gender: 'Female', startDate: '02 Mar 2017', endDate: '30-Jul-2020', email: 'alice.watson@example.com', phone: '+27967890123', location: 'Eastern Cape, South Africa', description: 'Analyzed sustainability data', bu: 'Sustainability' },
    { name: 'Brian Stewart', position: 'Business Development Officer', place: 'Northern Cape, Springbok', gender: 'Male', startDate: '12 Jun 2015', endDate: '30-Nov-2018', email: 'brian.stewart@example.com', phone: '+27012345678', location: 'Northern Cape, South Africa', description: 'Developed business strategies', bu: 'Business Development (BD)' }
];

// Separate list of business units
const businessUnits = [
    'Business Development (BD)',
    'Business Development (BD) External Services',
    'CEO\'s Office',
    'Coega Africa Programme (CAP)',
    'Corporate Services (CS)',
    'Finance',
    'ICT, Research and Strategy (IRS)',
    'Infrastructure Planning and Development (IPD)',
    'NDPW Unit',
    'Operations',
    'Small Business Finance Unit (SBFU)',
    'Sustainability'
];


const itemsPerPage = 12; // Number of alumni items to show per page
let currentPage = 1;

// Function to generate HTML for alumni list
function generateAlumniList(alumniList) {
    let html = '';
    for (let i = 0; i < alumniList.length; i++) {
        if (i % 3 === 0) {
            // Start a new row
            html += '<div class="row">';
        }
        html += `

        <div class="col-sm-6 col-lg-4 mb-4" data-toggle="modal" data-target="#alumniModal">
                                <div class="candidate-list candidate-grid">
                                    <div class="candidate-list-image">
                                        <img class="img-fluid"
                                            src="./assets/images/placeholder-image.jpg"
                                            alt>
                                    </div>
                                    <div class="candidate-list-details pb-3">
                                        <div class="candidate-list-info">
                                            <div class="candidate-list-title">
                                                <h5>${alumniList[i].name}</h5>
                                            </div>
                                            <div class="candidate-list-option">
                                                <ul class="list-unstyled">
                                                    <li><i
                                                            class="fas fa-filter pr-1 me-1"></i>${alumniList[i].bu}</li>
                                                    <li><i
                                                            class="fas fa-map-marker-alt pr-1 me-1"></i>${alumniList[i].place}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </div>
`;

        if ((i + 1) % 3 === 0 || i === alumniList.length - 1) {
            // Close the row
            html += '</div>';
        }
    }
    return html;
}

// Function to show alumni details in a modal
function showAlumniDetails(alumni) {
    const modalBody = document.getElementById('alumniModalBody');
    modalBody.innerHTML = `
<p><strong>Name:</strong> ${alumni.name}</p>
<p><strong>Email:</strong> ${alumni.email}</p>
<p><strong>Phone:</strong> ${alumni.phone}</p>
<p><strong>BU:</strong> ${alumni.bu}</p>
<p><strong>Location:</strong> ${alumni.place}</p>
<p><strong>Gender:</strong> ${alumni.gender}</p>
<p><strong>Started:</strong> ${alumni.startDate}</p>
<p><strong>End:</strong> ${alumni.endDate}</p>
<p><strong>Description:</strong> ${alumni.description}</p>
`;

    // Show the modal
    $('#alumniModal').modal('show');
}

// Function to render alumni list
function renderAlumniList(alumniList) {
    const alumniListContainer = document.querySelector('.alumni-list');
    alumniListContainer.innerHTML = generateAlumniList(alumniList);

    // Add click event listener to each alumni card
    document.querySelectorAll('.candidate-list').forEach((card, index) => {
        card.addEventListener('click', () => showAlumniDetails(alumniList[index]));
    });
}

// Function to filter alumni based on search input
function filterAlumni() {
    const searchInput = document.getElementById('searchInput');

    const filterValue = searchInput.value.toLowerCase();

    const filteredAlumni = alumniData.filter(alumni => {
        return (
            alumni.name.toLowerCase().includes(filterValue) ||
            alumni.bu.toLowerCase().includes(filterValue)
        );
    });

    renderAlumniList(filteredAlumni);
    renderPagination(filteredAlumni);


}

function filterLocation() {
    const searchLocation = document.getElementById('searchLocation');
    const filterlocation = searchLocation.value.toLowerCase();

    const filteredLocation= alumniData.filter(alumni => {
        return (
            alumni.place.toLowerCase().includes(filterlocation)
        );
    });


    renderAlumniList(filteredLocation);
    renderPagination(filteredLocation);
}

// Function to render pagination controls with Prev and Next buttons
function renderPagination(alumniList) {
    const paginationList = document.querySelector('.pagination');
    paginationList.innerHTML = ''; // Clear previous pagination

    const totalPages = Math.ceil(alumniList.length / itemsPerPage);

    // Prev Button
    const prevLi = document.createElement('li');
    prevLi.classList.add('page-item');
    if (currentPage === 1) {
        prevLi.classList.add('disabled');
    }
    const prevLink = document.createElement('span');
    prevLink.classList.add('page-link');
    prevLink.textContent = 'Prev';
    prevLi.appendChild(prevLink);
    prevLi.addEventListener('click', () => {
        if (currentPage > 1) {
            changePage(currentPage - 1, alumniList);
        }
    });
    paginationList.appendChild(prevLi);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPage) {
            li.classList.add('active');
        }
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = '#';
        a.textContent = i;
        a.addEventListener('click', () => changePage(i, alumniList));
        li.appendChild(a);
        paginationList.appendChild(li);
    }

    // Next Button
    const nextLi = document.createElement('li');
    nextLi.classList.add('page-item');
    if (currentPage === totalPages) {
        nextLi.classList.add('disabled');
    }
    const nextLink = document.createElement('a');
    nextLink.classList.add('page-link');
    nextLink.textContent = 'Next';
    nextLi.appendChild(nextLink);
    nextLi.addEventListener('click', () => {
        if (currentPage < totalPages) {
            changePage(currentPage + 1, alumniList);
        }
    });
    paginationList.appendChild(nextLi);
}

// Function to change the current page
function changePage(page, alumniList) {
    currentPage = page;
    renderAlumniList(getCurrentPageItems(alumniList));
    renderPagination(alumniList); // Update pagination controls after changing page
}

// Function to get items for the current page
function getCurrentPageItems(alumniList) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return alumniList.slice(startIndex, endIndex);
}

// BUSINESS UNIT FILTER
// Function to dynamically populate business unit checkboxes
function populateBusinessUnits() {
    const buContainer = document.querySelector('.widget-content');
    buContainer.innerHTML = ''; // Clear any existing checkboxes

    businessUnits.forEach((bu, index) => {
        const checkboxHTML = `
        <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="bu${index}" value="${bu}">
            <label class="custom-control-label" for="bu${index}">${bu}</label>
        </div>`;
        buContainer.innerHTML += checkboxHTML;
    });

    // Add event listeners to checkboxes
    document.querySelectorAll('.custom-control-input').forEach(checkbox => {
        checkbox.addEventListener('change', filterByBusinessUnit);
    });
}

// Function to filter alumni by selected business units
function filterByBusinessUnit() {
    const selectedBUs = Array.from(document.querySelectorAll('.custom-control-input:checked')).map(checkbox => checkbox.value);

    const filteredAlumni = alumniData.filter(alumni => selectedBUs.includes(alumni.bu) || selectedBUs.length === 0);

    renderAlumniList(filteredAlumni);
    renderPagination(filteredAlumni);
}

// Call the function to populate checkboxes on page load
populateBusinessUnits();
// END OF BUSINESS UNIT FILTER

// Function to initialize the page
function initPage() {
    renderAlumniList(getCurrentPageItems(alumniData));
    renderPagination(alumniData);

    // Add event listener for search input
    document.getElementById('searchInput').addEventListener('input', filterAlumni);
    // Add event listener for location input
    document.getElementById('searchLocation').addEventListener('input', filterLocation);
    
    // Populate business units and attach event listeners
    populateBusinessUnits();
}

// Initialize the page
initPage();