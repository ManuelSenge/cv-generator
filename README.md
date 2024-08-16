# cv-generator: Generate LaTeX code for your CV easy in a web interface

## Information

### What is This Program?

Welcome to the CV Generator! This tool allows you to create a detailed CV by filling out various sections such as Contact Information, Education, Professional Experience, and more. Use the sidebar to navigate between sections and manage your CV.

### How to execute it

Simply open the _index.html_ in your browser of your choise.

### Changing Section Order

You can change the order of sections on the left by simply dragging and dropping them in your desired sequence. Additionally, you have the flexibility to add new elements, edit existing ones, remove them, or rearrange their order within each section.

### Loading and Saving Data

For convenience, you can load and save existing CVs to easily manage your data. Once you are satisfied with the content, you can generate the corresponding LaTeX code to produce a well-formatted CV.

### Generating LaTeX Code

Please note, this tool does not include a LaTeX to PDF compiler, as it would significantly increase the tool's size. To compile your LaTeX code into a PDF, you can use your preferred LaTeX distribution or create a shared document on Overleaf. If you don't have an Overleaf account, you can sign up for one [here](https://www.overleaf.com/signup).

### Leave out Sections

Note that if you leave out a section, it will not be displayed in the final CV. Ensure that you add and configure all the necessary sections according to your requirements to get a complete CV output.

### Importing Your Current CV from PDF

If this is your first time using this program and you do not have a saved file to import yet, you can ask ChatGPT to do the work for you so that you don't have to insert all the information manually. Simply attach your PDF and write the following in the prompt:

```json
Can you extract all my information from the attached CV? I need it in the following JSON format where the sectionOrder can simply be copied:
{
    "contact": {
        "name": "Full Name",
        "dob": "01/01/1990",
        "phone": "123-456-7890",
        "email": "john.doe@example.com"
    },
    "sectionOrder": [
        "info-section",
        "load-data-section",
        "contact-info",
        "education-section",
        "experience-section",
        "internships-section",
        "activities-section",
        "publications-section",
        "skills-section",
        "languages-section",
        "generate-latex-section"
    ],
    "education": [
        {
            "institution": "University Name",
            "location": "City, Country",
            "degree": "Degree",
            "date": "Year",
            "items": ["Relevant details", "Relevant details"]
        }
    ],
    "experience": [
        {
            "company": "Company Name",
            "location": "City, Country",
            "role": "Role",
            "date": "Year",
            "items": ["Relevant details", "Relevant details"]
        }
    ],
    "internship": [
        {
            "company": "Company Name",
            "location": "City, Country",
            "role": "Role",
            "date": "Year",
            "items": ["Relevant details", "Relevant details"]
        }
    ],
    "activities": [
        {
            "organization": "Organization Name",
            "location": "City, Country",
            "role": "Role",
            "date": "Year",
            "items": ["Relevant details", "Relevant details"]
        }
    ],
    "publications": [
        {
            "title": "Publication Title",
            "items": ["Relevant details", "Relevant details"],
            "link": "http://example.com"
        }
    ],
    "skills": [
        {
            "skillTitle": "Skill",
            "description": "Skill details"
        }
    ],
    "languages": [
        {
            "language": "Language",
            "proficiency": "Proficiency Level"
        }
    ]
}

