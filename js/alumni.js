
// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sample alumni data
const alumniData = [
    { name: 'John Doe', position: 'Manager', place: 'Eastern Cape, Port Elizabeth', gender: 'Male', startDate: '12 Nov 2014', endDate: '31-May-2016', email: 'john.doe@example.com', phone: '+123456789', location: 'Eastern Cape, South Africa', description: 'I joined CDC as a procurement intern. After 5 months in procurement, I moved to the CEO’s Office in which I stayed for the rest of my internship. CDC has groomed me into the professional I am today. I have learned everything starting from integrity at work.' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.' },
    { name: 'Jane Smith', position: 'Engineer', place: 'Western Cape, Cape Town', gender: 'Female', startDate: '15 Jan 2015', endDate: '30-Apr-2017', email: 'jane.smith@example.com', phone: '+987654321', location: 'Western Cape, South Africa', description: 'I started my journey at CDC as a software developer. Over the years, I have contributed to various projects and gained valuable experience. CDC has provided me with opportunities to grow and excel in my career.' },
    

];
const itemsPerPage = 6; // Number of alumni items to show per page
let currentPage = 1;

// Function to generate HTML for alumni list
function generateAlumniList(alumniList) {
    let html = '';
    for (let i = 0; i < alumniList.length; i++) {
        if (i % 3 === 0) {
            // Start a new row
            html += '<div class="row text-center">';
        }
        // Generate a random number for the avatar
        const avatarNumber = getRandomNumber(1, 800);

        html += `
        <div class="col-md-4">
                    <div class="list-group-item">
                        <div class="media">
                            <div class="pull-left">
                                <img class="img-circle" src="https://eu.ui-avatars.com/api/?name=${alumniList[i].name}&size=200" alt="...">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">${alumniList[i].name} <small class="title-white">${alumniList[i].position}</small></h4>
                                <div class="media-content">
                                    <i class="fa fa-map-marker"></i> ${alumniList[i].place}
                                    <ul class="list-unstyled">
                                        <li><strong>Gender:</strong> ${alumniList[i].gender}</li>
                                        <li><strong>Started:</strong> ${alumniList[i].startDate}</li>
                                        <li><strong>End:</strong> ${alumniList[i].endDate}</li>
                                    </ul>
                                    <a href="#"><p>View details</p></a>
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
<p><strong>Position:</strong> ${alumni.position}</p>
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
// function renderAlumniList(alumniList) {
//     const alumniListContainer = document.querySelector('.list-group.contact-group');
//     alumniListContainer.innerHTML = generateAlumniList(alumniList);
// }

// Function to render alumni list
function renderAlumniList(alumniList) {
    const alumniListContainer = document.querySelector('.list-group.contact-group');
    alumniListContainer.innerHTML = generateAlumniList(alumniList);

    // Add click event listener to each alumni card
    document.querySelectorAll('.list-group-item').forEach((card, index) => {
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
            alumni.position.toLowerCase().includes(filterValue) ||
            alumni.place.toLowerCase().includes(filterValue)
        );
    });

    renderAlumniList(filteredAlumni);
    renderPagination(filteredAlumni);
}

// Function to render pagination controls
function renderPagination(alumniList) {
    const paginationList = document.getElementById('paginationList');
    paginationList.innerHTML = '';

    const totalPages = Math.ceil(alumniList.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        const a = document.createElement('a');
        a.classList.add('page-link');
        a.href = '#';
        a.textContent = i;
        a.addEventListener('click', () => changePage(i, alumniList));
        li.appendChild(a);
        paginationList.appendChild(li);
    }
}

// Function to change the current page
function changePage(page, alumniList) {
    currentPage = page;
    renderAlumniList(getCurrentPageItems(alumniList));
}

// Function to get items for the current page
function getCurrentPageItems(alumniList) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return alumniList.slice(startIndex, endIndex);
}

// Function to initialize the page
function initPage() {
    renderAlumniList(alumniData);
    renderPagination(alumniData);

    // Add event listener for search input
    document.getElementById('searchInput').addEventListener('input', filterAlumni);
}

// Initialize the page
initPage();
