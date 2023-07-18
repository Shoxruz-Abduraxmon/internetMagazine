// const uuid = require('uuidv4');
const { rejects } = require('assert');
const { json } = require('express');
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

    TOJSON() {
        return{
            img: this.img,
            name: this.name,
            vazifasi: this.vazifasi,
            maosh: this.maosh
        }
    }

    async save() {
        let kampaniya = await Components.getAll()
        kampaniya.push(this.TOJSON())

        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, '..', 'malumotlarBazasi', 'sklat.json'), 
                JSON.stringify(kampaniya),
                (err) => {
                    if (err) {
                        reject (err)
                    }else {
                        resolve()
                    }
                }
            )
        })
        

        // console.log('kanpaniya', kampaniya);
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