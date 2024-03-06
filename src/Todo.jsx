// export default function Todo({task, isDone}){
//     return(
//         <li>{task}</li>
//     )
// }

// conditional rendering first way
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     return <li>Work On: {task}</li>;
//   }
// }

// conditional rendering second way
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

// conditional rendering third way: Ternary Operator
// export default function Todo({task, isDone}) {
//     return (
//         <li>{task}: {isDone ? 'Finished' : 'Work One'}</li>
//     )
// }

// conditional rendering Fourth way

// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone && ':Done'}</li>
//     )
// }
// conditional rendering Fifth way
// export default function Todo({task, isDone}){
//     return(
//         <li>{task} {isDone || ':Do It'}</li>
//     )
// }


// conditional rendering sixth way

export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>FInish: {task}</li>
    } else{
        listItem = <li>Work On: {task}</li>
    }
    return listItem;
}