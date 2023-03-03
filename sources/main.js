import { bannerItems } from "./sources.js"


export const banner = bannerItems.map(function (bannerItems) {
    return `
    <li><a href="#">${bannerItems.item}</a></li>
    `
})

export const home = () => {
    return `
    `
}

const projects = () => {

}

const contacts = () => {

}