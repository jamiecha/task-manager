require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5f8a9a3154242508d75745c2').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log('number of incompleted tasks', result)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    console.log(task, ' ... is deleted')
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('5f8a9b5154242508d75745c5', false).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})