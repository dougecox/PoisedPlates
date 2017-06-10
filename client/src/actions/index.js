import axios from "axios";

export const FETCH_AUCTIONS = 'fetch_auctions';
export const FETCH_AUCTION = 'fetch_auction';
export const POST_AUCTION = 'post_auction';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_BID = 'FETCH_BID';
export const POST_BID = 'POST_BID';
export const SELECT_IMAGE = 'SELECT_IMAGE';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchAuctions() {
  const request = axios.get(`${ROOT_URL}/auctions`);

  return {
    type: FETCH_AUCTIONS,
    payload: request
  }
}

export function postAuction(values, callback) {
  const request = axios.post(`${ROOT_URL}/auction`, values)
    .then(() => callback());

  return {
    type: POST_AUCTION,
    payload: request
  };
}

export function fetchAuction(id) {
  const request = axios.get(`${ROOT_URL}/auction/${id}`);

  return {
    type: FETCH_AUCTION,
    payload: request
  };
}

export const toggleModal = () => ({ type: TOGGLE_MODAL });

export const fetchBid = (id) => (
  axios.get(`${ROOT_URL}/auction/${id}/currentBid`)
    .then(data => {
      return {
        type: FETCH_BID,
        payload: data
      }
    })
)

export const postBid = (id, bid) => {
  axios.post(`${ROOT_URL}/auction/${id}`, { amt: bid });

  return {
    type: POST_BID,
    payload: bid
  };
};

export const selectImage = (image, path) => ({ type: SELECT_IMAGE, payload: [image, path] });
