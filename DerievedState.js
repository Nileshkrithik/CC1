import { Component } from "react"

export default class DerivedState extends Component
{
    constructor(props)
    {
        super(props)
        this.state={myName:"Panvith"}
    }

    static getDerivedStateFromProps(props,state)
    {
        return({myName:props.newName})
    }

    render()
    {
        return(
            <div>
            <p>{this.state.myName}</p>
            </div>
        )
    }
}