
const routePublic = 'C:/Users/Usuario/Documents/Proyects/09-Portafolios'

export const homePage = ( req, res = response) => {
    res.status(200).sendFile( routePublic + '/public/index.html');
}

export const projectsPage = ( req, res = response) => {
    res.status(200).sendFile( routePublic + '/public/projects.html');
}

export const conctactsPage = ( req, res = response) => {
    res.status(200).sendFile( routePublic + '/public/contacts.html');
}
