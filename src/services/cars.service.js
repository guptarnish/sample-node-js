/*
  This program and the accompanying materials are
  made available under the terms of the Eclipse Public License v2.0 which accompanies
  this distribution, and is available at https://www.eclipse.org/legal/epl-v20.html
  
  SPDX-License-Identifier: EPL-2.0
  
  Copyright IBM Corporation 2020
*/

const data = require('../data');

const get = function (_id) {
    return getAll().find(car => car._id == _id);
}

const getByName = function (_name) {
    var cars = getAll();
    var results = [];
    for (var i = 0; i < cars.length; i++) {
        if (cars[i].Name.indexOf(_name) > -1) {
            results.push(cars[i]);
        }
    }
    return results;
}

const getAll = function () {
    return data.Cars;
}

module.exports = {
    get,
    getByName,
    getAll
};