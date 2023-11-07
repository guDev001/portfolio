const elemProjects = document.getElementById('project__content')

const loadProjects = (projects, index) => {
    projects.forEach(project => {
        const elemProject = document.createElement('a')

        elemProject.setAttribute('href', project.link)
        elemProject.setAttribute('target', '_blank')

        elemProject.setAttribute('data-aos', 'zoom-in-up')
        elemProject.setAttribute('data-aos-duration', '800')
        elemProject.setAttribute('data-aos-easing', 'ease-in-out')
        elemProject.setAttribute('data-aos-offset', '-100')
        elemProject.setAttribute('data-aos-delay', 300 * (index + 1))

        elemProject.classList.add('project')


        const elemPicture = document.createElement('picture')

        const elemImg = document.createElement('img')

        elemImg.setAttribute('src', project.image)

        elemPicture.appendChild(elemImg)
        

        // add Picture
        elemProject.appendChild(elemPicture)

        const elemStrong = document.createElement('strong')
        elemStrong.innerText = project.name

        // add Strong
        elemProject.appendChild(elemStrong)

        const elemTags = document.createElement('div')
        project.tags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        })
        console.log(elemProject)
        // add tag
        elemProject.appendChild(elemTags)

        

        elemProjects.appendChild(elemProject)
    });
}

fetch('./projects.json').then(response => response.json()).then(loadProjects)