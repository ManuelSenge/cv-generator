function editSectionName(icon) {
    const listItem = icon.parentElement;
    const link = listItem.querySelector('a');
    const currentName = link.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit-input';
    input.value = currentName;

    // Function to handle the update
    const updateSectionName = () => {
        const newName = input.value;
        link.textContent = newName;
        listItem.removeChild(input);
        listItem.appendChild(icon);

        // Update the <h2> in the corresponding section
        const targetId = link.getAttribute('data-target');
        const section = document.getElementById(targetId);
        if (section) {
            const header = section.querySelector('h2');
            if (header) {
                header.textContent = newName;
            }
        }
    };

    // Event listener for when the input loses focus
    input.addEventListener('blur', updateSectionName);

    // Event listener for the Enter key
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default behavior of Enter key (e.g., form submission)
            updateSectionName();
        }
    });

    // Insert the input field and remove the edit icon
    listItem.insertBefore(input, icon);
    listItem.removeChild(icon);
    input.focus();
}



window.addEventListener('beforeunload', function (e) {
    // Custom message for most modern browsers
    var confirmationMessage = 'Really want to refresh the website? All data will be removed.';

    // Display the custom message in an alert box
    e.returnValue = confirmationMessage; // For older browsers
    return confirmationMessage; // For modern browsers
});

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.main-content .section');

    function showSection(targetId) {
        // Hide all sections and remove active class from all links
        sections.forEach(section => {
            section.classList.remove('active');
        });

        links.forEach(link => {
            link.classList.remove('active');
        });

        // Show the targeted section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
            this.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Set the first link and section as active by default
    if (links.length > 0) {
        const firstLink = links[0];
        const defaultTargetId = firstLink.getAttribute('data-target');
        showSection(defaultTargetId);
        firstLink.classList.add('active'); // Add active class to the first link
    }

    new Sortable(document.getElementById('sortable-list'), {
        animation: 150,  // Time in ms for the animation
        ghostClass: 'sortable-ghost',  // Class applied to the element being dragged
        
        // Disable dragging for elements with the 'non-draggable' class
        filter: '.non-draggable',

        // Prevent dragging disabled elements
        onStart: function (/**Event*/evt) {
            if (evt.item.matches('.non-draggable')) {
                evt.preventDefault();
            }
        }
        
    });

    
});



function moveElement(button, direction) {
    const element = button.closest('.form-group');
    const container = element.parentElement;

    if (direction === 'up') {
        const previousElement = element.previousElementSibling;
        if (previousElement && previousElement.classList.contains('form-group')) {
            container.insertBefore(element, previousElement);
        }
    } else if (direction === 'down') {
        const nextElement = element.nextElementSibling;
        if (nextElement && nextElement.classList.contains('form-group')) {
            container.insertBefore(nextElement, element);
        }
    }
}


function addEducation() {
    const container = document.getElementById('education-container');
    const div = document.createElement('div');
    div.classList.add('form-group');
    div.innerHTML = `
        <label>Institution:</label>
        <input type="text" class="institution">
        <label>Location:</label>
        <input type="text" class="location">
        <label>Degree:</label>
        <input type="text" class="degree">
        <label>Date:</label>
        <input type="text" class="date">
        <label>Items:</label>
        <textarea class="items"></textarea>
        <div class="button-group">
            <button class="remove-button" onclick="removeSection(this)">Remove</button>
            <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
            <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
        </div>
    `;
    container.appendChild(div);
}

        function addExperience() {
            const container = document.getElementById('experience-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Company:</label>
                <input type="text" class="company">
                <label>Location:</label>
                <input type="text" class="location">
                <label>Role:</label>
                <input type="text" class="role">
                <label>Date:</label>
                <input type="text" class="date">
                <label>Items:</label>
                <textarea class="items"></textarea>
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>
            `;
            container.appendChild(div);
        }

        function addInternship() {
            const container = document.getElementById('internship-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Company:</label>
                <input type="text" class="company">
                <label>Location:</label>
                <input type="text" class="location">
                <label>Role:</label>
                <input type="text" class="role">
                <label>Date:</label>
                <input type="text" class="date">
                <label>Items:</label>
                <textarea class="items"></textarea>
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>            `;
            container.appendChild(div);
        }

        function addActivity() {
            const container = document.getElementById('activities-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Organization:</label>
                <input type="text" class="organization">
                <label>Location:</label>
                <input type="text" class="location">
                <label>Role:</label>
                <input type="text" class="role">
                <label>Date:</label>
                <input type="text" class="date">
                <label>Items:</label>
                <textarea class="items"></textarea>
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>            `;
            container.appendChild(div);
        }

        function addPublication() {
            const container = document.getElementById('publications-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Title:</label>
                <input type="text" class="title">
                <label>Items:</label>
                <textarea class="items"></textarea>
                <label>Link:</label>
                <input type="text" class="link">
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>            `;
            container.appendChild(div);
        }

        function addSkill() {
            const container = document.getElementById('skills-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Skill Title:</label>
                <input type="text" class="skill-title">
                <label>Description:</label>
                <textarea class="description"></textarea>
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>            `;
            container.appendChild(div);
        }

        function addLanguage() {
            const container = document.getElementById('languages-container');
            const div = document.createElement('div');
            div.classList.add('form-group');
            div.innerHTML = `
                <label>Language:</label>
                <input type="text" class="language">
                <label>Proficiency:</label>
                <input type="text" class="proficiency">
                <div class="button-group">
                    <button class="remove-button" onclick="removeSection(this)">Remove</button>
                    <button class="move-button move-up" onclick="moveElement(this, 'up')">UP</button>
                    <button class="move-button move-down" onclick="moveElement(this, 'down')">DOWN</button>
                </div>            `;
            container.appendChild(div);
        }

        function removeSection(button) {
            button.parentElement.parentElement.remove();
        }

        function generateLatex() {
            try {
                const name = document.getElementById('name').value;
                const dob = document.getElementById('dob').value;
                const phone = document.getElementById('phone').value;
                const email = document.getElementById('email').value;
                const linkedin = document.getElementById('linkedin').value;
        
                let latex = `
        \\documentclass[a4paper,11pt]{article}
        \\usepackage[a4paper,margin=0.75in]{geometry}
        \\usepackage{fontawesome5}
        \\usepackage{enumitem}
        \\usepackage{titlesec}
        \\usepackage{xcolor}
        \\usepackage{hyperref}
        \\usepackage[T1]{fontenc}
        \\usepackage{tgtermes}
        \\usepackage{lipsum}
        \\usepackage{enumitem}
        \\setlist[itemize]{topsep=0pt, partopsep=0pt, parsep=0pt, itemsep=0pt, after=\\vspace{0.7em}}
        
        % Custom colors
        \\definecolor{darkblue}{rgb}{0.0, 0.2, 0.5}
        \\definecolor{lightgray}{gray}{0.4}
        
        % Adjust section spacing
        \\titlespacing\\section{0pt}{8pt plus 4pt minus 2pt}{4pt plus 2pt minus 2pt}
        
        % Section formatting
        \\titleformat{\\section}
          {\\LARGE\\bfseries\\color{darkblue}\\raggedright} % Font size and color
          {} % No label or number
          {0pt} % Spacing between the title and the left margin
          {}[\\titlerule] % No indentation, followed by a horizontal rule
        
        % No page numbers
        \\pagestyle{empty}
        
        % Custom command for contact info
        \\newcommand{\\contactinfo}[4]{
            \\centering
            \\begin{tabular}{c}
                \\textbf{Date of Birth:} #2 \\quad \\faMobile\\ #3 \\quad \\faEnvelope\\ \\href{mailto:#4}{#4} \\quad \\faLinkedin\\ \\href{${linkedin}}{LinkedIn}
            \\end{tabular}
        }
        
        \\begin{document}
        \\raggedright
        
        % Name and contact information
        \\begin{center}
            {\\huge \\bfseries ${name}}
        \\end{center}
        
        \\vspace{2mm}
        
        \\contactinfo{${name}}{${dob}}{${phone}}{${email}}
                `;
        
                const sectionOrder = document.querySelectorAll('.sidebar ul li a');
        
                sectionOrder.forEach((section) => {
                    const target = section.getAttribute('data-target');
                    const header = document.querySelector(`#${target} h2`);
                    const headerText = header ? header.textContent : '';
        
                    switch (target) {
                        case 'education-section':
                            // Education Section
                            const educations = document.querySelectorAll('#education-section .form-group');
                            if (educations.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                educations.forEach((edu) => {
                                    const institution = edu.querySelector('.institution').value;
                                    const location = edu.querySelector('.location').value;
                                    const degree = edu.querySelector('.degree').value;
                                    const date = edu.querySelector('.date').value;
                                    const items = edu.querySelector('.items').value.replace(/\n/g, ' \\\\ \n');
        
                                    latex += `
        \\textbf{${institution}} \\hfill ${location}\\\\
        \\textit{${degree}} \\hfill \\textbf{${date}}
        \\begin{itemize}[leftmargin=0.5cm]
            ${items.split('\n').map(item => `\\item ${item}`).join('\n')}
        \\end{itemize}
                                    `;
                                });
                            }
                            break;
        
                        case 'experience-section':
                            // Work Experience Section
                            const experiences = document.querySelectorAll('#experience-section .form-group');
                            if (experiences.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                experiences.forEach((exp) => {
                                    const company = exp.querySelector('.company').value;
                                    const location = exp.querySelector('.location').value;
                                    const role = exp.querySelector('.role').value;
                                    const date = exp.querySelector('.date').value;
                                    const items = exp.querySelector('.items').value.replace(/\n/g, ' \\\\ \n');
        
                                    latex += `
        \\textbf{${company}} \\hfill ${location}\\\\
        \\textit{${role}} \\hfill \\textbf{${date}}
        \\begin{itemize}[leftmargin=0.5cm]
            ${items.split('\n').map(item => `\\item ${item}`).join('\n')}
        \\end{itemize}
                                    `;
                                });
                            }
                            break;
        
                        case 'internships-section':
                            // Internships Section
                            const internships = document.querySelectorAll('#internships-section .form-group');
                            if (internships.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                internships.forEach((intern) => {
                                    const company = intern.querySelector('.company').value;
                                    const location = intern.querySelector('.location').value;
                                    const role = intern.querySelector('.role').value;
                                    const date = intern.querySelector('.date').value;
                                    const items = intern.querySelector('.items').value.replace(/\n/g, ' \\\\ \n');
        
                                    latex += `
        \\textbf{${company}} \\hfill ${location}\\\\
        \\textit{${role}} \\hfill \\textbf{${date}}
        \\begin{itemize}[leftmargin=0.5cm]
            ${items.split('\n').map(item => `\\item ${item}`).join('\n')}
        \\end{itemize}
                                    `;
                                });
                            }
                            break;
        
                        case 'activities-section':
                            // Activities Section
                            const activities = document.querySelectorAll('#activities-section .form-group');
                            if (activities.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                activities.forEach((act) => {
                                    const organization = act.querySelector('.organization').value;
                                    const location = act.querySelector('.location').value;
                                    const role = act.querySelector('.role').value;
                                    const date = act.querySelector('.date').value;
                                    const items = act.querySelector('.items').value.replace(/\n/g, ' \\\\ \n');
        
                                    latex += `
        \\textbf{${organization}} \\hfill ${location}\\\\
        \\textit{${role}} \\hfill \\textbf{${date}}
        \\begin{itemize}[leftmargin=0.5cm]
            ${items.split('\n').map(item => `\\item ${item}`).join('\n')}
        \\end{itemize}
                                    `;
                                });
                            }
                            break;
        
                        case 'publications-section':
                            // Publications Section
                            const publications = document.querySelectorAll('#publications-section .form-group');
                            if (publications.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                publications.forEach((pub) => {
                                    const title = pub.querySelector('.title').value;
                                    const items = pub.querySelector('.items').value.replace(/\n/g, ' \\\\ \n');
                                    const link = pub.querySelector('.link').value;
        
                                    latex += `
        \\textbf{${title}} \\\\
        ${items} \\\\
        \\textcolor{blue}{\\href{${link}}{${link}}}
                                    `;
                                });
                            }
                            break;
        
                        case 'skills-section':
                            // Skills Section
                            const skills = document.querySelectorAll('#skills-section .form-group');
                            if (skills.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                skills.forEach((skill) => {
                                    const skillTitle = skill.querySelector('.skill-title').value;
                                    const description = skill.querySelector('.description').value.replace(/\n/g, ' \\\\ \n');
        
                                    latex += `
        \\textbf{${skillTitle}}: ${description} \\\\
                                    `;
                                });
                            }
                            break;
        
                        case 'languages-section':
                            // Languages Section
                            const languages = document.querySelectorAll('#languages-section .form-group');
                            if (languages.length > 0) {
                                latex += `
        % ${headerText}
        \\section*{${headerText}}
        \\noindent
        \\raggedright
        \\vspace{0.4em}
                                `;
                                languages.forEach((lang) => {
                                    const language = lang.querySelector('.language').value;
                                    const proficiency = lang.querySelector('.proficiency').value;
        
                                    latex += `
        \\textbf{${language}}: ${proficiency} \\\\
                                    `;
                                });
                            }
                            break;
                    }
                });
        
                latex += `
        \\end{document}
                `;
        
                document.getElementById('latex-output').value = latex;
            } catch (error) {
                alert(`Error generating LaTeX: ${error.message}\n\nStack trace:\n${error.stack}`);
            }
        }
        
        
        
        

// Function to copy LaTeX to clipboard
function copyLatex() {
    const latexOutput = document.getElementById('latex-output');
    
    // Select the textarea content
    latexOutput.select();
    latexOutput.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}



function saveData() {
    const messageDiv = document.getElementById('save-message');
    // Prepare the data to be saved
    try {
        // Extract the order of sections from the navigation bar
        const sectionOrder = Array.from(document.querySelectorAll('.sidebar ul li a')).map(section => section.getAttribute('data-target'));

        // Prepare the data to be saved
        const data = {
            sectionOrder: sectionOrder, // Add the order of sections to the data
            headers: sectionOrder.reduce((acc, target) => {
                const header = document.querySelector(`#${target} h2`);
                if (header) {
                    acc[target] = header.textContent.trim();
                } else {
                    acc[target] = ''; // Provide an empty string if no header is found
                }
                return acc;
            }, {}),
            contact: {
                name: document.getElementById('name').value.trim(),
                dob: document.getElementById('dob').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                email: document.getElementById('email').value.trim(),
                linkedin: document.getElementById('linkedin').value.trim()
            },
            education: Array.from(document.querySelectorAll('#education-section .form-group')).map(edu => ({
                institution: edu.querySelector('.institution').value.trim(),
                location: edu.querySelector('.location').value.trim(),
                degree: edu.querySelector('.degree').value.trim(),
                date: edu.querySelector('.date').value.trim(),
                items: edu.querySelector('.items').value.trim()
            })),
            experience: Array.from(document.querySelectorAll('#experience-section .form-group')).map(exp => ({
                company: exp.querySelector('.company').value.trim(),
                location: exp.querySelector('.location').value.trim(),
                role: exp.querySelector('.role').value.trim(),
                date: exp.querySelector('.date').value.trim(),
                items: exp.querySelector('.items').value.trim()
            })),
            internship: Array.from(document.querySelectorAll('#internship-section .form-group')).map(intern => ({
                company: intern.querySelector('.company').value.trim(),
                location: intern.querySelector('.location').value.trim(),
                role: intern.querySelector('.role').value.trim(),
                date: intern.querySelector('.date').value.trim(),
                items: intern.querySelector('.items').value.trim()
            })),
            activities: Array.from(document.querySelectorAll('#activities-section .form-group')).map(act => ({
                organization: act.querySelector('.organization').value.trim(),
                location: act.querySelector('.location').value.trim(),
                role: act.querySelector('.role').value.trim(),
                date: act.querySelector('.date').value.trim(),
                items: act.querySelector('.items').value.trim()
            })),
            publications: Array.from(document.querySelectorAll('#publications-section .form-group')).map(pub => ({
                title: pub.querySelector('.title').value.trim(),
                items: pub.querySelector('.items').value.trim(),
                link: pub.querySelector('.link').value.trim()
            })),
            skills: Array.from(document.querySelectorAll('#skills-section .form-group')).map(skill => ({
                skillTitle: skill.querySelector('.skill-title').value.trim(),
                description: skill.querySelector('.description').value.trim()
            })),
            languages: Array.from(document.querySelectorAll('#languages-section .form-group')).map(lang => ({
                language: lang.querySelector('.language').value.trim(),
                proficiency: lang.querySelector('.proficiency').value.trim()
            }))
        };

        // Convert the data to a JSON Blob
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = document.getElementById('save_file_name').value + '.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        messageDiv.textContent = 'Data successfully saved!';
        messageDiv.style.color = 'green';
    } catch (error) {
        messageDiv.textContent = `Error saving data: ${error.message}`;
        messageDiv.style.color = 'red';
    }
}


function loadData() {
    try {
        const input = document.getElementById('file-input');
        const file = input.files[0];
        const messageDiv = document.getElementById('load-message');

        if (!file) {
            messageDiv.textContent = 'No file selected.';
            messageDiv.style.color = 'red';
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {
            try {
                const data = JSON.parse(event.target.result);

                document.getElementById('name').value = data.contact.name || '';
                document.getElementById('dob').value = data.contact.dob || '';
                document.getElementById('phone').value = data.contact.phone || '';
                document.getElementById('email').value = data.contact.email || '';
                document.getElementById('linkedin').value = data.contact.linkedin || ''; // Adding LinkedIn field

                // Sort nav items based on the order in the JSON
                const sectionOrder = data.sectionOrder

                // Update navigation bar order and text
                const navList = document.getElementById('sortable-list');
                const navItems = Array.from(navList.querySelectorAll('li'));

                // Create a map for section names
                const sectionNames = data.headers || {};

                // reorder
                sectionOrder.forEach(section => {
                    const targetId = section;
                    const matchingNavItem = navItems.find(item => item.querySelector('a').dataset.target === targetId);
                    if (matchingNavItem) {
                        navList.appendChild(matchingNavItem); // Re-append in the correct order
                    }
                });

                // Update the navigation bar with section names
                navItems.forEach(item => {
                    const link = item.querySelector('a');
                    const targetId = link.getAttribute('data-target');

                    // Update the link text with the name from data
                    link.textContent = sectionNames[targetId];

                });

                // Function to update the header and content of each section
                const updateSection = (sectionId, items, fields) => {
                    const container = document.getElementById(sectionId);
                    const header = container.querySelector('h2');

                    // Set the section header text
                    if (header) {
                        header.textContent = sectionNames[sectionId] || ''; // Set the header text
                    }
                    

                    // Clear existing content before filling with new data
                    //container.innerHTML = '';

                    items.forEach(item => {
                        const div = document.createElement('div');
                        div.className = 'form-group';
                    
                        fields.forEach(field => {
                            const input = field.type === 'textarea'
                                ? document.createElement('textarea')
                                : document.createElement('input');
                            
                            input.className = field.className;
                            input.type = field.type || 'text';
                    
                            if (field.type === 'textarea') {
                                const value = Array.isArray(item[field.key])
                                    ? item[field.key].join('\n')
                                    : item[field.key] || '';
                                input.value = value;
                                input.style.height = '100px'; 
                            } else {
                                input.value = item[field.key] || ''; 
                            }
                    
                            input.placeholder = field.placeholder || '';
                            div.appendChild(input);
                        });

                        // Create button group
                        const buttonGroup = document.createElement('div');
                        buttonGroup.className = 'button-group';

                        // Remove button
                        const removeButton = document.createElement('button');
                        removeButton.className = 'remove-button';
                        removeButton.textContent = 'Remove';
                        removeButton.onclick = () => div.remove(); 
                        buttonGroup.appendChild(removeButton);

                        // Move up button
                        const moveUpButton = document.createElement('button');
                        moveUpButton.className = 'move-button move-up';
                        moveUpButton.textContent = 'UP';
                        moveUpButton.onclick = () => moveElement(div, 'up');
                        buttonGroup.appendChild(moveUpButton);

                        // Move down button
                        const moveDownButton = document.createElement('button');
                        moveDownButton.className = 'move-button move-down';
                        moveDownButton.textContent = 'DOWN';
                        moveDownButton.onclick = () => moveElement(div, 'down');
                        buttonGroup.appendChild(moveDownButton);

                        // Append button group to the form group div
                        div.appendChild(buttonGroup);
                        
                        container.appendChild(div);
                    });
                };

                // Update each section with its data
                updateSection('education-section', data.education || [], [
                    { className: 'institution', key: 'institution', placeholder: 'Institution' },
                    { className: 'location', key: 'location', placeholder: 'Location' },
                    { className: 'degree', key: 'degree', placeholder: 'Degree' },
                    { className: 'date', key: 'date', placeholder: 'Date' },
                    { className: 'items', key: 'items', placeholder: 'Items (one per line)', type: 'textarea' }
                ]);

                updateSection('experience-section', data.experience || [], [
                    { className: 'company', key: 'company', placeholder: 'Company' },
                    { className: 'location', key: 'location', placeholder: 'Location' },
                    { className: 'role', key: 'role', placeholder: 'Role' },
                    { className: 'date', key: 'date', placeholder: 'Date' },
                    { className: 'items', key: 'items', placeholder: 'Items (one per line)', type: 'textarea' }
                ]);

                updateSection('internships-section', data.internship || [], [
                    { className: 'company', key: 'company', placeholder: 'Company' },
                    { className: 'location', key: 'location', placeholder: 'Location' },
                    { className: 'role', key: 'role', placeholder: 'Role' },
                    { className: 'date', key: 'date', placeholder: 'Date' },
                    { className: 'items', key: 'items', placeholder: 'Items (one per line)', type: 'textarea' }
                ]);

                updateSection('activities-section', data.activities || [], [
                    { className: 'organization', key: 'organization', placeholder: 'Organization' },
                    { className: 'location', key: 'location', placeholder: 'Location' },
                    { className: 'role', key: 'role', placeholder: 'Role' },
                    { className: 'date', key: 'date', placeholder: 'Date' },
                    { className: 'items', key: 'items', placeholder: 'Items (one per line)', type: 'textarea' }
                ]);

                updateSection('publications-section', data.publications || [], [
                    { className: 'title', key: 'title', placeholder: 'Title' },
                    { className: 'items', key: 'items', placeholder: 'Items (one per line)', type: 'textarea' },
                    { className: 'link', key: 'link', placeholder: 'Link' },
                ]);

                updateSection('skills-section', data.skills || [], [
                    { className: 'skill-title', key: 'skillTitle', placeholder: 'Skill Title' },
                    { className: 'description', key: 'description', placeholder: 'Description (one per line)', type: 'textarea' }
                ]);

                updateSection('languages-section', data.languages || [], [
                    { className: 'language', key: 'language', placeholder: 'Language' },
                    { className: 'proficiency', key: 'proficiency', placeholder: 'Proficiency' }
                ]);

                messageDiv.textContent = 'Data successfully loaded!';
                messageDiv.style.color = 'green';
            } catch (error) {
                messageDiv.textContent = `Error loading data: ${error.message}`;
                messageDiv.style.color = 'red';
            }
        };

        reader.readAsText(file);
    } catch (error) {
        alert(`${error.message}`);
    }
}
