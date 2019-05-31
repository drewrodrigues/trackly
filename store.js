import Datastore from "react-native-local-mongodb"

export default new Datastore({ filename: "trackly", autoload: true })