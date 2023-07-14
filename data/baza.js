const uuid = require('uuid');
const fs = require('fs');
const path = require('path');


class Components {
    constructor(img, name, vazifasi, maosh) {
        this.img = img,
        this.name = name, 
        this.vazifasi = vazifasi,
        this.maosh = maosh,
        this.id = id()
    }

    save() {

    }

    static getAll() {
        fs.readFile(
            path.join(__dirname, '..', 'malumotlarBazasi', 'sklat.json'),
            'utf-8',
            (err, content) => {
                if(err) throw err
                
            }
        )
    } 
}