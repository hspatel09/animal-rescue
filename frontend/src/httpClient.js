import axios from 'axios';

const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL || '';

export async function getAnimals() {
    return axios
        .get(`${backendBaseUrl}/animals`)
        .then(res => res.data);
}

export async function submitAdoptionRequest({animalId, email, notes}) {
    return axios.post(`${backendBaseUrl}/animals/${animalId}/adoption-requests`, {email, notes});
}

export async function editAdoptionRequest({animalId, adoptionRequestId, email, notes}) {
    return axios.put(`${backendBaseUrl}/animals/${animalId}/adoption-requests/${adoptionRequestId}`,
        {email, notes});
}

export async function deleteAdoptionRequest({animalId, adoptionRequestId}) {
    return axios.delete(`${backendBaseUrl}/animals/${animalId}/adoption-requests/${adoptionRequestId}`);
}

export async function getUsername() {
    return fetch(`${backendBaseUrl}/whoami`).then(r => {
        if (r.redirected) {
            return '';
        } else {
            return r.text();
        }
    });
}

