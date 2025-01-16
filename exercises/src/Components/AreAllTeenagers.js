import { firstTeenager } from "./FirstTeenager"
import { persons } from "./PersonList"

function AreAllTeenagers() {
    return (
        <>
            <h1>All people are teenager: </h1>
            <p>{firstTeenager.length === persons.length ? 'true' : 'false'}</p>
        </>
    )
}

export default AreAllTeenagers