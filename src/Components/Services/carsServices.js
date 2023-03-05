import axios from 'axios';
import { BASE_URL } from '../config';

export const getCarsData = () => {
    return new Promise(async (resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        axios
            .get(`${BASE_URL}carsData`, config)
            .then(resp => {
                let response = resp.data;
                resolve(response);
            })
            .catch(error => {
                const err = error;
                reject(err);
            });
    });
};

export const addCarsData = (id, data) => {
    if (!id) {
        return new Promise(async (resolve, reject) => {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            axios
                .post(`${BASE_URL}carsData`, data, config)
                .then(resp => {
                    let response = resp.data;
                    resolve(response);
                })
                .catch(error => {
                    const err = error;
                    reject(err);
                });
        });
    } else {
        return new Promise(async (resolve, reject) => {
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            axios
                .put(`${BASE_URL}carsData/${id}`, data, config)
                .then(resp => {
                    let response = resp.data;
                    resolve(response);
                })
                .catch(error => {
                    const err = error;
                    reject(err);
                });
        });
    }
};

export const deleteCarById = (id) => {
    return new Promise(async (resolve, reject) => {
        let config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        axios
            .delete(`${BASE_URL}carsData/${id}`, config)
            .then(resp => {
                getCarsData();
                let response = resp.data;
                resolve(response);
            })
            .catch(error => {
                const err = error;
                reject(err);
            });
    });
};