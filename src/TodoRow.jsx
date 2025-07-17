export default function TodoRow({id,title,tasks,completed,updateCompleted,updateTasks}) {
    function handleCheckbox(){
        const thisTask = tasks.find(t => t.id === id);
        const newTasks = tasks.filter(t => t.id !== id);
        const newCompleted = [thisTask,...completed] ;
        updateCompleted(newCompleted);
        updateTasks(newTasks);
    }
    return (
        <div >
            <input className="accent-yellow-500" type="checkbox" id={id} onChange={handleCheckbox}/>
            <label className="text-gray-600 font-medium ml-2" htmlFor={id}>{title}</label>
        </div>
    )
}