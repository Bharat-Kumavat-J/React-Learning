function Inputtodos(){

    return <div className="inputTodos">
        
        <div className="input-section-1">

            <input className="todoInput" type="text" placeholder="Enter Todo"/>
            <input className="date-input" type="date" />
        </div>
        
        <div className="input-section-2">
            <input className="create-button" type="button" value="Create Task"/>

        </div>
    </div>
}

export default Inputtodos;