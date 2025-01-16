import { persons } from "./PersonList"

const firstTeenager = persons.filter(person => person.age>=10 && person.age<=20)
function FirstTeenager(){
    return(
        <>
        <h1>
            First Teenager: <span>{firstTeenager[0]?.name}</span>
        </h1>

        </>
    )
}

export {firstTeenager}
export default FirstTeenager