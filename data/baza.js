// const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


class Components {
    constructor(img, name, vazifasi, maosh) {
        this.img = img
        this.name = name 
        this.vazifasi = vazifasi
        this.maosh = maosh
        this.id = null
    }

    async save() {
        let kampaniya = await Components.getAll()
        console.log('kanpaniya', kampaniya);
    }

    static getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'malumotlarBazasi', 'sklat.json'),
                'utf-8',
                (err, content) => {
                    if(err) {
                        resolve (err) 
                    } else {
                        resolve(JSON.parse(content))
                    }
                    
                }
            )
        })

        
    } 
}

module.exports = Components;