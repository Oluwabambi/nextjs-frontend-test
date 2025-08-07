import axios from "@/api/axios";
import { GET_REVIEWS_URL } from "@/api/paths";

export const getReviews = () => axios.get(GET_REVIEWS_URL);