import { firebaseDatabase } from "../../config/firebase";

export const refCars = () => firebaseDatabase.ref("cars");
