import express from "express";
import 'dotenv/config';
import cors from "cors";
import home from "../routes/home.js";
import projects from "../routes/projects.js";
import conctact from "../routes/contacts.js";


class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT || 8000;
        this.path = {
            home: '/home',
            projects: '/projects',
            conctact: '/contacts'
        }

        this.middleware()

        this.routes()
    }

    middleware() {
        //cors
        this.app.use(express(cors));

        //public
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.path.home, home)
        this.app.use(this.path.projects, projects)
        this.app.use(this.path.conctact, conctact)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        })
    }

}

export default Server;