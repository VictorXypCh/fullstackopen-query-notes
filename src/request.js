import axios from "axios";
const baseUrl = "http://localhost:3001/notes";

export const getNotes = () => axios.get(baseUrl).then((res) => res.data);
export const createNote = () => axios.post(baseUrl).then((res) => res.data);
export const updateNote = (updatedNote) =>
  axios
    .put(`${baseUrl}/${updatedNote.id}`, updatedNote)
    .then((res) => res.data);
