
// Sample alumni data
const alumniData = [
    { name: 'John Doe', position: 'Manager', place: 'Eastern Cape, Port Elizabeth', gender: 'Male', startDate: '12 Nov 2014', endDate: '31-May-2016', email: 'john.doe@example.com', phone: '+123456789', location: 'Eastern Cape, South Africa', description: 'I joined CDC as a procurement intern. After 5 months in procurement, I moved to the CEO’s Office in which I stayed for the rest of my internship. CDC has groomed me into the professional I am today. I have learned everything starting from integrity at work.', bu: 'Business Development (BD)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: 'CEOs Office' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.', bu: ' ICT, Research and Strategy (IRS)' },

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


// Function to initialize the page
function initPage() {
    renderAlumniList(getCurrentPageItems(alumniData));
    renderPagination(alumniData);

    // Add event listener for search input
    document.getElementById('searchInput').addEventListener('input', filterAlumni);
    // Add event listener for location input
    document.getElementById('searchLocation').addEventListener('input', filterLocation);
}

// Initialize the page
initPage();